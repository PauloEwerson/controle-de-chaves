const chavesModel = require('../models/chavesModel');

const getAll = async () => chavesModel.getAll();

const getById = async (id) => chavesModel.getById(id);

const add = async (colab) => chavesModel.add(colab);

const update = async (person) => {
  const id = Number(person.id);
  const updated = await chavesModel.update(person.colab, id);
  if (!updated.affectedRows) return null;
  return { ...person, id };
};

module.exports = {
  getAll,
  getById,
  add,
  update
};