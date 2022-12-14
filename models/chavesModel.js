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

const add = async (colab) => {
  // [rows, defições da tabla]
  const [result] = await connection
    .execute('INSERT INTO tab_colaboradores (colab) VALUES (?);', [colab]);
  return { id: result.insertId, colab };
};

const update = async (colab, id) => {
  const [result] = await connection
  .execute(`
    UPDATE tab_colaboradores 
    SET colab = ?
    WHERE colab_id = ?;`, 
    [colab, id]); 

    return result;
};

const exclude = async (id) => connection
  .execute('DELETE FROM tab_colaboradores WHERE colab_id = ?;', [id]);

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude
};