const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants/authConstants");

const authenticateToken = (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, SECRET_KEY);

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        error: "Unauthorized. Invalid access token or token expired.",
      });
    }
  }

  if (!token) {
    res.status(401).json({ error: "Unauthorized. No token provided." });
  }
};

module.exports = { authenticateToken };