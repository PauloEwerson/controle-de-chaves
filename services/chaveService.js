const chavesModel = require('../models/chavesModel');

const getAll = async () => chavesModel.getAll();

const getById = async (id) => chavesModel.getById(id);

const add = async (colab) => chavesModel.add(colab);

module.exports = {
  getAll,
  getById,
  add
};