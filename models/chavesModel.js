const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM tab_colaboradores;');
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute('SELECT * FROM tab_colaboradores WHERE colab_id = ?;', [id]);
  if (!result.length) return null;
  return result[0];
};

module.exports = {
  getAll,
  getById
};