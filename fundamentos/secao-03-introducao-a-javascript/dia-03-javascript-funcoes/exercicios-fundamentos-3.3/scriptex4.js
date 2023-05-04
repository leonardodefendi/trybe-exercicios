

function maiorPalavra (nomes){
  let maiorNome="";
  for (let index = 0; index < nomes.length; index +=1 ){
    if (nomes[index].length > maiorNome.length){
      maiorNome=nomes[index];
    }
  }
  return maiorNome;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log(maiorPalavra(['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix']));
