const express = require("express");
const { login } = require("../controllers/authController");

const router = express.Router();

const loginRoute = router.post("/login", login);

module.exports = { loginRoute };