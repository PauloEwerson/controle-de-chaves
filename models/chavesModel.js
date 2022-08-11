const connection = require('./connection');

const getAll = async () => {
  // const [result] = await connection.execute('SELECT * FROM tab_colaboradores;');
  const [result] = await connection.execute('SELECT * FROM tab_colaboradores;');
  return result;
};

module.exports = {
  getAll,
};