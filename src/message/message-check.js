'use strict'

class MessageCheck {
  /**
   * Comprueba que el autor del mensaje no es el propio bot
   * @param {Message} msg Mensaje del cliente
   */
  static isBot(msg) {
    if (msg.author.bot) return;
  }

  /**
   * Convierte el contenido del mensaje a letra minuscula
   * @param {Message} msg Mensaje del cliente
   */
  static toLower(msg) {
    return msg.content.toLowerCase();
  }
}

module.exports = MessageCheck;