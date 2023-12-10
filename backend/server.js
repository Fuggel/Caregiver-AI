require("dotenv").config();
const OpenAI = require("openai").OpenAI;
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

let chatHistory = [];

app.post("/api/question", async (req, res) => {
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
});

app.post("/api/delete-chat", (req, res) => {
  try {
    chatHistory = [];
    res.json({ message: "Chat history cleared successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
