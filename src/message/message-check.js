'use strict'

class MessageCheck {
  /**
   * Comprueba que el autor del mensaje no es el propio bot
   * @param {Message} msg Mensaje del cliente
   * @returns {bool} true si es un bot : si no lo es
   */
  static isBot(msg) {
    return msg.author.bot;
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