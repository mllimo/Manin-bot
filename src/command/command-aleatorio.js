'use strict'
const Command = require('./command.js');
const regex = require('../general/regex.js');

class CommandAleatorio extends Command {
  constructor() {
    super();
  }

  /**
   * Devuelve un número aleatorio entero entre dos números. !aleatorio numero-numero
   * @param {Message} msg Mensaje del cliente
   */
  execute(msg) {
    if (!regex.ALEATORIO_COMMAND.test(msg.content)) return false;
    let min = msg.content.replace(regex.ALEATORIO_COMMAND, '$1');
    let max = msg.content.replace(regex.ALEATORIO_COMMAND, '$2');;
    let random = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    msg.channel.send('Ha salido el ' + random);
    return true; 
  }
}

module.exports = CommandAleatorio;