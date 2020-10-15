const Discord = require('discord.js');
const Reply = require('./reply.js');
const Command = require('./command.js');

class Message {
  constructor(msg) {
    new Reply(msg);
    new Command(msg);
  }
}

module.exports = Message;