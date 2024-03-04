const fs = require('fs').promises;
const { join } = require('path');
const paths = '/files/cacauTrybe.json';
const completePath = join(__dirname, paths);
const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybe.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getTotalChocolates = async () => {
  const cacauTrybe= await readCacauTrybeFile();
  const total = cacauTrybe.length
  return total;
}

const changeChocolates = async (id, update) => {
  const cacauTrybe = await readCacauTrybeFile();
  const filtredChocolate = cacauTrybe.chocolates.find((chocolate) => chocolate.id === Number(id));
  if(filtredChocolate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
      if (chocolate.id === Number(id)) return { ...chocolate, ...update};
      return chocolate;
    })
  await fs.writeFile(completePath, JSON.stringify(cacauTrybe));
  return {...filtredChocolate, ...update};
  }
  return false;
}


module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getTotalChocolates,
    changeChocolates,
};