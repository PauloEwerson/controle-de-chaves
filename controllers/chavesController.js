const chaveService = require('../services/chaveService');

const ERROR_500 = 'Algo deu errado';

const getAll = async (_req, res, _next) => {
  try {
    const chave = await chaveService.getAll();
    return res.status(200).json(chave);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = {
  getAll,
};