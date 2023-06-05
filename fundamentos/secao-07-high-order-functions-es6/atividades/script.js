// const employees = [
//   { id: 1, nome: 'Douglas Adams', idade: 20},
//   { id: 2, nome: 'H. G. Wells', idade: 18},
//   { id: 3, nome: 'Júlio Verne', idade: 57},
//   { id: 4, nome: 'Margaret Atwood', idade: 83},
//   { id: 5, nome: 'Edgar Allan Poe', idade: 19},
// ];

// employees.find((employee) => {
//   employee.id === 2
//   console.log(employee.idade);
// })

// exercicio 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verify = numbers.find((numero) => numero % 3 ===0 && numero % 5 === 0);

console.log(verify);

// exercicio 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const verify2 = names.find((nome) => nome.length === 5 );
console.log(verify2);

// exercicio 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const verify3 = musicas.find((music) => music.id === '31031685').title;
console.log(verify3)