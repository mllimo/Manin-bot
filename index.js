const Discord = require('discord.js');
const Message = require('./src/message/message.js');
const regex = require('./src/regex.js')

const bot = new Discord.Client();
const token = 'NzY2MzkyMDExMTMyODk1MjUz.X4isLg.u85GG0w7iHMO_tpwPTwxa39kicY';


bot.login(token);
bot.on('ready', run);
bot.on('message', message);

function run() {
  console.log('Maaa me acabo de despertaar!');
}

function message(msg) {
  Message.process(msg);
}
