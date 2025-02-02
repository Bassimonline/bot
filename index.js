const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7940399786:AAEabZDZ7u1ud4qt3fmKBQocAB-EX1eyAsM";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://blowngrowbot.netlify.app";
const community_link = "https://t.me/BlownGrowCommunity";


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName}! I am @BlownGrow, Welcome to BlownGrow!*
Mine BlownGrow cryptocurrency easily and earn BlownGrow tokens.

Start mining now and be among the biggest players earning BlownGrow tokens daily.

Got friends, relatives, co-workers?
Bring them all into the game.
More squad power, more BlownGrow tokens.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "👋 Start now!", web_app: { url: urlSent } }],
              [{ text: "Join our Community", url: community_link }]
            
            ],
            in: true
        },
    });
  });

  bot.launch();
  
app.listen(3000, () => {
    console.log("server is me and now running")
})