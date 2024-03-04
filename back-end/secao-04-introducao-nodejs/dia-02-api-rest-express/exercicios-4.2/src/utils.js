const fs = require('fs');

const path = require('path');

const dir = path.resolve(__dirname, './movies.json');

const readMovies = async () => {
  try {
    const data = await fs.readFileSync(dir);
    const response = await JSON.parse(data);
    return response;
  } catch (error) {
    console.log('Não foi possivel ler o arquivo', error.message);
  }
};

module.exports = readMovies;