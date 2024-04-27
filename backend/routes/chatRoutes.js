const express = require("express");
const { sendQuestion, deleteChat } = require("../controllers/chatController");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

const questionRoute = router.post("/question", sendQuestion);
const deleteChatRoute = router.delete("/delete-chat", deleteChat);

module.exports = { questionRoute, deleteChatRoute };


