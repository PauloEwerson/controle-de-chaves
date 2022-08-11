const chavesModel = require('../models/chavesModel');

const getAll = async () => chavesModel.getAll();

module.exports = {
  getAll
};