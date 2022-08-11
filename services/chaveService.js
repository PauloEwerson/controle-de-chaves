const chavesModel = require('../models/chavesModel');

const getAll = async () => chavesModel.getAll();

const getById = async (id) => chavesModel.getById(id);

module.exports = {
  getAll,
  getById
};