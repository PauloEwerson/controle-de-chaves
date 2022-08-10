const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');

const peopleService = require('../services/peopleService');
const peopleModel = require('../models/peopleModel');

describe('Busca todas as pessoas no BD', () => {
  describe('quando não existe nenhuma pessoa criada', () => {
    before(function () {
      sinon.stub(peopleModel, 'getAll').resolves([]);
    });
    after(function () {
      peopleModel.getAll.restore();
    });
    it('retorna um array', async function () {
      const result = await peopleService.getAll();
      expect(result).to.be.an('array');
    });

    it('o array vazio', async function () {
      const result = await peopleService.getAll();
      expect(result).to.empty;
    });
  });
  describe('quando exitem pessoas criadas', () => {
    before(function () {
      sinon.stub(peopleModel, 'getAll').resolves([{ id: 1, name: 'Carol', age: 18 }]);
    });
    after(function () {
      peopleModel.getAll.restore();
    });
    it('retorne um array', async function () {
      const result = await peopleService.getAll();
      expect(result).to.be.an('array');
    });
    it('o array não esteja vazio', async function () {
      const result = await peopleService.getAll();
      expect(result).to.not.empty;
    });
    it('o array possua itens do tipo objeto', async function () {
      const result = await peopleService.getAll();
      expect(result[0]).to.be.an('object');
    });
    it('objetos tenham as propriedades: "id", "name" e "age"', async function () {
      const result = await peopleService.getAll();
      expect(result[0]).to.all.keys('id', 'age', 'name');
    });
  });
});