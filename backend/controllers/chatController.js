require("dotenv").config();
const OpenAI = require("openai").OpenAI;

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

let chatHistory = [];

const sendQuestion = async (req, res) => {
  try {
    chatHistory.push({ role: "user", content: req.body.userInput });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: process.env.SYSTEM_CONTENT },
        ...chatHistory,
      ],
      max_tokens: Number(process.env.MAX_TOKENS),
    });

    const botResponse = response.choices[0].message.content;
    chatHistory.push({ role: "system", content: botResponse });

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
