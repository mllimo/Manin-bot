const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const regex = require('../src/general/regex.js');

describe('regex', () => {

  describe('Comprueba que es un comando', () => {
    it('Tiene que ser un comando: !comando', () => {
      expect(regex.COMMAND.test('!comando')).to.equal(true);
    });

    it('No tiene que ser un comando: Buenos días !comando', () => {
      expect(regex.COMMAND.test('Buenos días !comando')).to.equal(false);
    });

    it('Tiene que ser un comando: !comando', () => {
      expect(regex.COMMAND.test(' !comando')).to.equal(true);
    });
  });

  describe('Comprueba las replys', () => {
    describe('VIM', () => {
      it('Tiene que detectar: Me encanta vim', () => {
        expect(regex.VIM.test('Me encanta vim')).to.equal(true);
      });

      it('No tiene que detectar: vimos una pelicula', () => {
        expect(regex.VIM.test('vimos una pelicula')).to.equal(false);
      });
    });

    describe('LOL', () => {
      it('Tiene que detectar: !lol', () => {
        expect(regex.LOL_COMMAND.test('!lol')).to.equal(true);
      });

      it('No tiene que detectar: lol', () => {
        expect(regex.LOL_COMMAND.test('lolazo')).to.equal(false);
      });
    });

    describe('!pon', () => {
      it('Tiene que detectar: !aleatorio 3-5', () => {
        expect(regex.ALEATORIO_COMMAND.test('!aleatorio 3-5')).to.equal(true);
      });

      it('Tiene que detectar: !aleatorio 3.5-5', () => {
        expect(regex.ALEATORIO_COMMAND.test('!aleatorio 3.5-5')).to.equal(true);
      });

      it('No tiene que detectar: !aleatorio', () => {
        expect(regex.ALEATORIO_COMMAND.test('!aleatorio')).to.equal(false);
      });
    });

  });

});