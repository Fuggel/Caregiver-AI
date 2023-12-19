const express = require("express");
const { sendQuestion, deleteChat } = require("../controllers/chatController");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

const questionRoute = router.post("/question", authenticateToken, sendQuestion);
const deleteChatRoute = router.delete(
  "/delete-chat",
  authenticateToken,
  deleteChat
);

module.exports = { questionRoute, deleteChatRoute };
