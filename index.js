const Discord = require('discord.js');
const regex = require('./src/regex.js')
const configMessage = require('./src/init/config-message.js');
const token = require('./config/token.json');

const bot = new Discord.Client();

bot.login(token.value);
bot.on('ready', run);
bot.on('message', message);

function run() {
  console.log('Maaa me acabo de despertaar!');
}

function message (msg) {
  configMessage.process(msg);
}

