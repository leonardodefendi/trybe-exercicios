// const primeNumbers = [17, 23, 37]

// const sum = (a, b) => {
//   console.log(a + b);
// }

// sum(primeNumbers[0], primeNumbers[2]) // 54

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [primeNumbers1, primeNumbers2, primeNumbers3] = primeNumbers;
// sum(primeNumbers1, primeNumbers3);

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, bebida, animal] = [bebida, animal, comida];
// console.log(comida, bebida, animal);


// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// // Utilize array destructuring para produzir o resultado esperado pelo console.log acima

// [,,, ...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];
// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'Brazilian' } = person;
// console.log(nationality); // Brazilian
const getNationality = ({ firstName, nationality='Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
// const {nationality = 'Brazilian'} = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));