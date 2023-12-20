require("dotenv").config();
const OpenAI = require("openai").OpenAI;
const {
  API_KEY,
  SYSTEM_CONTENT,
  MAX_TOKENS,
  MAX_MESSAGES,
} = require("../constants/chatConstants");

const openai = new OpenAI({
  apiKey: API_KEY,
});

let chatHistory = [];
let chatLocked = false;

const sendQuestion = async (req, res) => {
  try {
    if (chatLocked) {
      return res.status(423).json({
        message: "The chat is temporarily unavailable.",
      });
    }

    chatHistory.push({ role: "user", content: req.body.userInput });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: SYSTEM_CONTENT }, ...chatHistory],
      max_tokens: MAX_TOKENS,
    });

    const botResponse = response.choices[0].message.content;
    chatHistory.push({ role: "system", content: botResponse });

    if (chatHistory.length >= MAX_MESSAGES) {
      chatLocked = true;
      setTimeout(() => {
        chatLocked = false;
        chatHistory = [];
      }, 1000 * 60 * 60 * 2);
    }

    res.json({ chatHistory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
};

const deleteChat = (req, res) => {
  try {
    chatHistory = [];
    res.json({ message: "Chat history cleared successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
};

module.exports = { sendQuestion, deleteChat };
