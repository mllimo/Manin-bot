const Reply = require('../reply/reply.js');
const Command = require('../command/command.js');
const MessageCheck = require('./message-check.js');
const regex = require('../regex.js');

'use strict'

class MessageHandler {
  constructor(){
    this.commands_ = [];
    this.replys_ = [];
  }

  /**
   * Almacena un comando en la lista de comandos
   * @param {Command} command Comando a guardar
   */
  storeCommand(command) {
    this.commands_.push(command);
  }

  /**
   * Busca en la lista de comandos y ejecuta el correspondiente
   * @param {Message} msg mensaje del cliente
   */
  executeCommand(msg) {
    for (let command of this.commands_) {
      if (command.execute(msg)) break;
    }
  }

  /**
   * Almacena una reply en la lista de replys
   * @param {Reply} reply reply a guardar
  */
  storeReply(reply) {
    this.replys_.push(reply);
  }

  /**
   * Busca en la lista de replys y ejecuta el correspondiente
   * @param {Message} msg mensaje del cliente
   */
  executeReply(msg) {
    for (let reply of this.replys_) {
      if (reply.execute(msg)) break;
    }
  }

  /**
   * Procesa el mensaje dado
   * @param {Message} msg mensaje del cliente
   */
  process(msg) {
    if (MessageCheck.isBot(msg)) return;
    if (regex.COMMAND.test(msg.content)) {
      this.executeCommand(msg);
    } else {
      this.executeReply(msg);
    }
  }
}

module.exports = MessageHandler;