const MessageCheck = require('../message/message-check.js');
const Reply = require('./reply.js');
const regex = require('../regex.js');

'use strict'

class ReplyVim extends Reply {
  constructor() {
    super();
  }

  /**
   * Abstracción de la función que ejecuta la reply
   * @param {Message} msg Mensaje del cliente
   * @returns {bool} true si encontró la reply : si no
  */
  execute(msg) {
    if (!regex.VIM.test(MessageCheck.toLower(msg))) return false;
    msg.reply('Manin, esa palabra está prohibida');
    return true;
  }
}

module.exports = ReplyVim;