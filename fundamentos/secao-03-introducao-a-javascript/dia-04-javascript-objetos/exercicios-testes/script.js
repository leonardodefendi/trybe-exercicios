// let player ={
//   nome: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3,

//   } 
// }

// console.log("A jogadora", player.nome, player.lastName, "tem", player.age, "de idade");
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player["bestInTheWorld"])
// console.log("A Jogadora possui", player.medals.golden, "de ouro e", player.medals.silver,"de prata" );

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for(let key in names){
//   console.log("Olá,", names[key]);
// }

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for(let key in car){
//   console.log(key, ':',car[key]);
// }

// let customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };



// function addProperty(object, key, value) {
//   object[key] = value;
// };

// addProperty(customer, newKey, lastName);
// console.log(customer);


// let student = {};

// function addProperty (objeto, chave, valor){
//   objeto[chave] = valor;
// }

// addProperty(student, "fullName", "Leonardo Defendi Prado");
// addProperty(student, "age", 27);
// addProperty(student,"formacao", "Engenheiro Civil" );

// let student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// let student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// function exibe (student){
//   let array = Object.keys(student)
//   for (let index in array){
//     console.log("Habilidade", array[index], "Nivel :", student[array[index]] );
//   }
// }
// exibe(student1)

// let countries = {
//   franca: 'Paris',
//   brasil: 'Brasília',
//   espanha: 'Madrid',
//   portugal: 'Lisboa',
// };
// let pairKeyValue = Object.entries(countries);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ' = ' + object[property]);
}
