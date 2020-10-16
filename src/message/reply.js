const regex = require('../regex.js');

'use strict'

class Reply {

  static process(msg) {
    let msgLowerCase = msg.content.toLowerCase()
    if (regex.VIM.test(msgLowerCase)) {
      msg.reply('Manin, esa palabra está prohibida');
    }
  }

};

module.exports = Reply;