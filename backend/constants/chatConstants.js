require("dotenv").config();

const API_KEY = process.env.API_KEY;
const SYSTEM_CONTENT = process.env.SYSTEM_CONTENT;
const MAX_TOKENS = Number(process.env.MAX_TOKENS);
const MAX_MESSAGES = Number(process.env.MAX_MESSAGES);

module.exports = { API_KEY, SYSTEM_CONTENT, MAX_TOKENS, MAX_MESSAGES };
