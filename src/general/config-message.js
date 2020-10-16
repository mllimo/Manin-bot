const MessageHandler = require('../message/message-handler.js');

// Replys includes
const ReplyVim = require('../reply/reply-vim.js');
// !Replys includes

// Commands includes
const CommandLol = require('../command/command-lol.js');
// !Commands includes

const configMessage = new MessageHandler();

// Replys store
configMessage.storeReply(new ReplyVim());
// !Replys store

// Commands store
configMessage.storeCommand(new CommandLol());
// !Commands store

module.exports = configMessage;