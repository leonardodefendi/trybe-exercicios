// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array, a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }

const techList = (array, name) => {
  let newArrya = [];
  let arrayNovo = array.sort();
  if(array.length > 0) {
    for(let index = 0; index < arrayNovo.length; index += 1) {
      let tech = arrayNovo[index];
      let obj = {};
      obj['tech'] = tech
      obj['name'] = name;
      newArrya.push(obj);
    }
    return newArrya;
  }
  return 'Vazio!'
} 

console.log(techList([], 'Lucas'))

module.exports =techList;