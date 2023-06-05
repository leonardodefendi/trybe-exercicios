const rigthAnswers= ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (respostas, studentRespostas) => {
      if(respostas === studentRespostas){
        return 1
      } else if (studentRespostas === 'N.A') {
        return 0
      } else {
        return -0.5;
      }

}

const nota = (respostas, studentRespostas, callback) => {
  let soma = 0;
  for(let index = 0; index < studentRespostas.length; index += 1) {
    let chamada = callback(respostas[index], studentRespostas[index]);
    soma += chamada;
  }
return soma;
}

console.log(nota(rigthAnswers, studentAnswers, verifyAnswers));