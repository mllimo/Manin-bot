'use strict'

/**
 * Devuelve un número aleatorio entre un rango 
 * @param {Number} numA Número 
 * @param {Number} numB Número
 */
function random(numA, numB) {
  return Math.floor(Math.random() * (Number(numB) - Number(numA) + 1)) + Number(numA);
}

module.exports = { random };