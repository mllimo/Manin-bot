// COMANDS
const COMMAND = /^(\s*!.*)/;
const LOL_COMMAND = /^(\s*!lol)/;
const ALEATORIO_COMMAND = /^\s*!aleatorio (\d+|\d+\.\d+)-(\d+|\d+\.\d+)/;
// REPLYS
const VIM = /vim/g;

module.exports = { COMMAND, VIM, LOL_COMMAND, ALEATORIO_COMMAND };