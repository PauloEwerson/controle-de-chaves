const chaveService = require('../services/chaveService');

const ERROR_500 = 'Algo deu errado';

const getAll = async (_req, res, _next) => {
  try {
    const colaboradores = await chaveService.getAll();
    return res.status(200).json(colaboradores);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const colaborador = await chaveService.getById(id);
    if (!colaborador) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    return res.status(200).json(colaborador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const add = async (req, res) => {
  const { colab } = req.body;
  try {
    const newColab = await chaveService.add(colab);
    return res.status(201).json(newColab);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { colab } = req.body;
  try {
    const people = await chaveService.update({ colab, id });
    if (!people) {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    return res.status(200).json(people);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const exclude = async (req, res) => {
  try {
    const colaborador = await chaveService.exclude(req.params.id);
    if (!colaborador) return res.status(404).json({ message: 'Pessoa não encontrada' });
    return res.status(200).json(colaborador);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude
};