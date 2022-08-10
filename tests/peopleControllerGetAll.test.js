const sinon = require('sinon');
const { expect } = require('chai');

const { before } = require('mocha');
const peopleController = require('../controllers/peopleController');
const peopleService = require('../services/peopleService');

describe('Busca todas as pessoas no BD', function () {
  describe('quando não existe nenhuma pessoa criada', function () {
    const response = {};
    const request = {};
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(peopleService, 'getAll').resolves([]);
    });
    after(function () {
      peopleService.getAll.restore();
    });
    
    it('o status seja 200', async function () {
      await peopleController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('o array vazio', async function () {
      await peopleController.getAll(request, response);
      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });
  describe('quando exitem pessoas criadas', function () {
    const response = {};
    const request = {};
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(peopleService, 'getAll').resolves([{ id: 1, name: 'Ana Melo', age: 18 }]);
    });
    after(function () {
      peopleService.getAll.restore();
    });
    it('o status seja 200', async function () {
      await peopleController.getAll(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('o array com os dados', async function () {
      await peopleController.getAll(request, response);
      expect(response.json.calledWith([{ id: 1, name: 'Ana Melo', age: 18 }])).to.be.equal(true);
    });
  });
});