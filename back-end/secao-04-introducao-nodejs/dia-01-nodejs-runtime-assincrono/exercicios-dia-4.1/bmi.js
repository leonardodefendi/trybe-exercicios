const weightkg = 103;
const heightCm = 196;
const readline = require('readline-sync');


const imc = (weight, height) => {
  const value = weight/(height * height);
  return value;
}

const main = () => {
  const peso = readline.questionInt('Qual o seu peso em kg? ');
  const altura = readline.questionFloat('Qual a sua altura em metros? ');

  const bmi = imc(peso, altura);

  console.log(`IMC: ${bmi}`);
  if (bmi < 18.5) console.log('Abaixo do peso')
  if(bmi >= 18.5 && bmi <= 24.9) console.log('Peso Normal')
  if(bmi >= 25 && bmi <= 29.9) console.log('Acima do peso')
  if(bmi >= 30 && bmi <= 34.90) console.log('Obesidade grau I')
  if(bmi >= 35 && bmi <= 39.90) console.log('Obesidade grau II')
  if(bmi >= 40) console.log('Obesidade grau III e IV')
}

main();