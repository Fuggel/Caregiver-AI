require("dotenv").config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = { ADMIN_USERNAME, ADMIN_PASSWORD, SECRET_KEY };
