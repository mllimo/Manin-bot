const Discord = require('discord.js');
const Reply = require('./reply.js');
const Command = require('./command.js');
const regex = require('../regex.js');

'use strict'

class Message {
  static process(msg) {
    if (regex.COMMAND.test(msg.content)) {
      Command.process(msg);
    } else {
      Reply.process(msg);
    }
  }
}

module.exports = Message;