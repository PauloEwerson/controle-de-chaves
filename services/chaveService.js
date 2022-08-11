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

const exclude = async (id) => {
  const colaborador = await chavesModel.getById(id);
  if (!colaborador) return null;
  await chavesModel.exclude(id);
  return { ...colaborador };
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude
};