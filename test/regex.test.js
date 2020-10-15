const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const regex = require('../src/regex.js');

describe('regex' , () => {

  describe('Comprueba que es un comando', () => {
    it('Tiene que ser un comando: !comando', () => {
      expect(regex.COMAND.test('!comando')).to.equal(true);
    });
  
    it('No tiene que ser un comando: Buenos días !comando', () => {
      expect(regex.COMAND.test('Buenos días !comando')).to.equal(false);
    });

    it('No tiene que ser un comando: !comando', () => {
      expect(regex.COMAND.test(' !comando')).to.equal(false);
    });

  });

});