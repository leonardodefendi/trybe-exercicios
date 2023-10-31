const fs = require('fs').promises;
const readline = require('readline-sync');

const personagens = async() => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const personagens = JSON.parse(fileContent);
  personagens.map((personagem) => console.log(`${personagem.id} - ${personagem.name}`));
  return personagens;
}

const verifyId = async(id) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const personagens = JSON.parse(fileContent);
  const promise = new Promise((resolve, reject) => {
    if(!personagens.find((value) => Number(value.id) === id)) {
      reject(new Error ('Personagem com este id não foi encontrado'));
    };
    resolve(personagens.find((value) => Number(value.id) === id));
  })
  return promise;
}

const changeData = async() => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const personagens = JSON.parse(fileContent);
  const newPersonagens = personagens.filter((personagem) => personagem.id !== '10' && personagem.id !== '6');
  console.log(newPersonagens);
}

const createNewFile = async() => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const personagens = JSON.parse(fileContent);
  const newPersonagens = JSON.stringify(personagens.filter((personagen) => personagen.id >= 1 && personagen.id <=4));
  await fs.writeFile('./simpsonFamily.json', newPersonagens);
}

const addNewPersonagem = async() => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const personagens = JSON.parse(fileContent);
  const newFamily = [...personagens, {
    id: "8",
    name: "Nelson Muntz"
  }];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newFamily));
};

const changePersonagem = async() => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const personagens = JSON.parse(fileContent);
  const newArray = personagens.map((personagen) => {
   if(personagen.name === 'Nelson Muntz') {
    return {id: '15', name:'Maggie Simpson'};
   }
   return personagen;
  })
  console.log(newArray);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
}


const main = async() => {
  // const id = readline.questionInt('Digite um id');
  // const verify = await verifyId(id);
  // console.log(verify);
  //  await createNewFile();
  // console.log(teste);
  // await addNewPersonagem();
  await changePersonagem();
}

main();
