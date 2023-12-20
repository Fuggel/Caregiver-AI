require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { questionRoute, deleteChatRoute } = require("./routes/chatRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", questionRoute);
app.use("/api", deleteChatRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
