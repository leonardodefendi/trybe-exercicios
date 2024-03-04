const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [passengers] = await connection.execute('SELECT * FROM passengers');
  return camelize(passengers);
};

const findById = async (passengerId) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [passengerId],
  );
  return camelize(passenger);
};

const insert = async ({ name, email, phone }) => {
  const [{ insertId }] = await connection
  .execute('INSERT INTO passengers (name, email, phone) VALUES (?, ?, ?)',
  [name, email, phone]);
  console.log(insertId);
  return insertId;
};

const remove = async (passengerId) => {
  await connection.execute('DELETE FROM passengers WHERE id = ?', [passengerId]);
};

module.exports = { 
  findAll,
  findById,
  insert,
  remove,
 };