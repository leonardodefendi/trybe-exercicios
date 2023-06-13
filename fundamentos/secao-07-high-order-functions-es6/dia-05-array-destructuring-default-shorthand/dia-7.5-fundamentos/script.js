// exercicio 01
const myList = [5, 2, 3];

// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a]

//exercicio 02:
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([carro, marca, ano]) => {
  return {carro, marca, ano};
}
// console.log(toObject(palio));

// exercicio 03:
// escreva greet abaixo
const greet = (name, message = 'Hi') => {
  return `${message} ${name}`;
}
// Retornos esperados:
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'



// exercicio 04:
// const student1 = {
//   name: `Claudia`,
//   lastName: `Farias`,
//   age: 23,
// }

// const student2 = {
//   name: `Vitor`,
//   age: 20,
// }

// // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
// const getLastName = (student) => {
//   const { lastName } = student;
//   return lastName ? lastName : 'lastName não preenchido';
// }
// console.log(getLastName(student1));
// console.log(getLastName(student2));



// exercicio 05:
const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const newStudentsArray = moreStudents.flat();
const [student1, student2, student3, student4, student5] = newStudentsArray;

console.log(student1, student2, student3, student4, student5);