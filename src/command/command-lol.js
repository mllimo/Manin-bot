const Command = require('./command.js');
const MessageCheck = require('../message/message-check.js');
const regex = require('../general/regex.js');

'use strict'

class CommandLol extends Command {
  constructor() {
    super();
  }

  /**
   * Al ser ejecutado usa @everyone + la fecha de invocación para llamar a los
   * usuarios a jugar al lol
   * @param {Message} msg Mensaje del cliente
   * @returns {bool} true si es el comando : si no
   */
  execute(msg) {
    if (!regex.LOL_COMMAND.test(MessageCheck.toLower(msg))) return false;
    let date = new Date();
    msg.channel.send('@everyone quien lol de las ' + date.getHours() +
     ':' + date.getMinutes() + '?');
    return true;
  }
}

module.exports = CommandLol;