const hydratade = (string) => {
  const newString = string.split(' ')
  let soma = 0;
  for(let index = 0; index < newString.length; index += 1) {
    if(!isNaN(parseFloat(newString[index]))) {
      let value = parseInt(newString[index]);
      soma += value;
    } 
  } if (soma > 1) {
    return `${soma} copos de água`
  }
  return `${soma} copo de água`
}


console.log(hydratade('1 cachaça,  cervejas e  copo de vinho'));
module.exports = hydratade;