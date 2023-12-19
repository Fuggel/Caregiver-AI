require("dotenv").config();

const jwt = require("jsonwebtoken");
const {
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  SECRET_KEY,
} = require("../constants/authConstants");

const login = (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      res.json({
        token: jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" }),
      });
    } else {
      res.status(401).json({ error: "Invalid credentials." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: `Internal server error: ${error}` });
  }
};

module.exports = { login };
