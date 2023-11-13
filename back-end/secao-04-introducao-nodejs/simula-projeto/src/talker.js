const fs = require('fs').promises;
// const { read } = require('fs');
const { join } = require('path');
// const { all } = require('./app');

const paths = '/files/data.json';
const completePath = join(__dirname, paths);

const readData = async () => {
  try {
    const file = await fs.readFile(join(__dirname, paths), 'utf-8');
    return JSON.parse(file);
  } catch (error) {
    return null;
  }
};

const getById = async (id) => {
    const talkers = await readData();
    const filtredTalkers = talkers.find((talker) => talker.id === Number(id));
    return filtredTalkers;
};

const postNewTalker = async (update) => {
  const talkers = await readData();
  const newTalker = { id: 1, ...update };
  console.log('este é o newtalker', newTalker);
  const allTalkers = [...talkers, newTalker];
  console.log('Este é o allTalkers', allTalkers);
  if (update) {
    fs.writeFile(completePath, JSON.stringify(allTalkers));
    return newTalker;
  }
  return null;
};
module.exports = {
  readData,
  getById,
  postNewTalker,
};