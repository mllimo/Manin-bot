const regex = require('../regex.js');

'use strict'

class Command {
  static process(msg) {
    let msgLowerCase = msg.content.toLowerCase()
    if (regex.LOL_COMMAND.test(msgLowerCase)) {
      Command.lol(msg);
    }
  }

  static lol(msg) {
    let date = new Date();
    msg.channel.send('@everyone quien lol de las ' + date.getHours() +
     ':' + date.getMinutes() + '?');
  }
}

module.exports = Command;