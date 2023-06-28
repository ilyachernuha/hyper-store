require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { bot, CHAT_ID } = require("./bot.js");

const port = process.env.PORT;

const app = express();

const corsOptions = {
  origin: "*", //should be set up
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/", async (req, res) => {
  const { phone, name } = req.body;
  console.log(`[server]: Received request {phone: ${phone}, name: ${name}}`);
  CHAT_ID.forEach((chatId) => {
    bot.telegram.sendMessage(
      chatId,
      `Received request {phone: ${phone}, name: ${name}}`
    );
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port}`);
});
