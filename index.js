const Discord = require('discord.js');
const regex = require('./src/general/regex.js')
const configMessage = require('./src/general/config-message.js');
const token = require('./config/token.json');
const Queue = require('./src/general/queue.js');

const bot = new Discord.Client();
const actionQueue = new Queue();

bot.login(token.value);
bot.on('ready', run);
bot.on('message', message);

function run() {
  console.log('Maaa me acabo de despertaar!');
}

function message(msg) {
  actionQueue.add(configMessage.process, configMessage, msg);
}

