const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const CHAT_ID = new Set();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command("start", (ctx) => {
  ctx.reply("Please send the secret key to log in.");
});
bot.on(message("text"), (ctx) => {
  console.log(CHAT_ID);
  const { text } = ctx.update.message;
  if (text === "process.env.BOT_TOKEN") {
    CHAT_ID.add(ctx.message.chat.id);
    ctx.reply("Your secret key is correct! You are now logged in.");
  } else {
    ctx.reply("Your secret key is not correct! Stop the bot to log out.");
  }
});
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

module.exports = { bot, CHAT_ID };
