// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
// }
// imprimeIdade()
// ------------------------------------------------ requisito 2
  // // Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`
  // const pessoa = {
  //   nome: 'Henri',
  //   idade: 20
  // }
  // const pessoa2 = {
  //   nome: 'Luna',
  //   idade: 19
  // } // Altere essa estrutura para corrigir o erro.
  // console.log('Nome:', pessoa.nome);
  // console.log('Idade:', pessoa.idade);
  // ------------------------------------------------ requisito 3

  // const favoriteFood = 'Lasanha';
  // favoriteFood = 'Hambúrguer';
  // console.log(favoriteFood);

    // ------------------------------------------------ requisito 4
// const name = 'Adriana';
// const lastName = 'Soares';
// // console.log('Olá' + ',' + name + ' ' + lastName + '!');
// function soma(a,b) {
//   let resultado = a + b;
//     return resultado;
// }
// let a = 3;
// let b = 5;
//     // console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
//     // console.log('Olá' + ',' + name + ' ' + lastName + '!');
// console.log(`Olá, ${name} ${lastName}!
// O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`)
// // ------------------------------------------------ requisito 5
// // function numeroAleatorio() {
// //   return Math.random()
// // }
// // console.log(numeroAleatorio());
// const numeroAleatorio = () => {
//   return Math.random()
// }
// console.log(numeroAleatorio());
// ------------------------------------------------ requisito 6
// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

// const nomeCompleto = (nome,sobrenome) => {
//   return `${nome} ${sobrenome}`

// }
// console.log(nomeCompleto("Ivan", "Pires"));
// ------------------------------------------------ requisito 7

const speedCar = (speed) => ( speed >= 120 ? `Você ultrapassou o limite de velocidade`  : `Você está na velocidade permitida`);
console.log(speedCar(90));
