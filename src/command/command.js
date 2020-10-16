const regex = require('../regex.js');

'use strict'

class Command {
  constructor() {
  }

  /**
   * Abstracción de la función que ejecuta el comando
   * @param {Message} msg Mensaje del cliente
   * @returns {bool} true si encontró el comando : si no
   */
  execute(msg) {
  }

}

module.exports = Command;