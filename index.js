/**

███████╗███████╗██████╗░░█████╗░
╚════██║██╔════╝██╔══██╗██╔══██╗
░░███╔═╝█████╗░░██████╔╝██║░░██║
██╔══╝░░██╔══╝░░██╔══██╗██║░░██║
███████╗███████╗██║░░██║╚█████╔╝
╚══════╝╚══════╝╚═╝░░╚═╝░╚════╝░
 * **********************************************
 *   Code by Zeroexo
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  const imagePath = path.join(__dirname, 'index.html');
  res.sendFile(imagePath);
});
app.listen(port, () => {
  console.log(`🔗 Listening to Zero: http://localhost:${port}`);
  console.log(`🔗 Replit URL: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
});



const statusMessages = ["Remove the Giveaway role after Giveaway","Giveaway Role remover"]; /** do what you want here*/


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    👑 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**

 ███████╗███████╗██████╗░░█████╗░
 ╚════██║██╔════╝██╔══██╗██╔══██╗
 ░░███╔═╝█████╗░░██████╔╝██║░░██║
 ██╔══╝░░██╔══╝░░██╔══██╗██║░░██║
 ███████╗███████╗██║░░██║╚█████╔╝
 ╚══════╝╚══════╝╚═╝░░╚═╝░╚════╝░
 * **********************************************
 *   Code by Zeroexo
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}], /** goes with everything but when you play comes as a wet with botgohst*/
    status: 'online', /***Status that the bot should have: Online,dnd,invisible,idle*/
  });


  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {

    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1)% statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 5000);
});

login();

/**

 ███████╗███████╗██████╗░░█████╗░
 ╚════██║██╔════╝██╔══██╗██╔══██╗
 ░░███╔═╝█████╗░░██████╔╝██║░░██║
 ██╔══╝░░██╔══╝░░██╔══██╗██║░░██║
 ███████╗███████╗██║░░██║╚█████╔╝
 ╚══════╝╚══════╝╚═╝░░╚═╝░╚════╝░
 * **********************************************
 *   Code by Zeroexo
 * **********************************************
 */
