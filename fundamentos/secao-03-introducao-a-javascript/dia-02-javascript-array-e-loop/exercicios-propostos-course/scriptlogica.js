// let word = "tryber";
// let palavraInvertida = "";
// let letraInvertida;

// for(index = word.length -1; index >= 0; index -= 1){
//   letraInvertida = [word[index]]
//   palavraInvertida = palavraInvertida + letraInvertida;
// }
// console.log(palavraInvertida);

// // -----------------------------------

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array [0];
// let menor = array [0];

// for(let index = 0; index < array.length; index += 1  ){
//   if(array[index].length > maiorPalavra.length)
//     maiorPalavra = array[index];
//   }
// console.log(maiorPalavra);

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < menor.length) {
//     menor = array[index];
//   }
// }
// console.log(menor);  
// // -----------------------------------------------------------------

// let numerosPrimos = []
// let maiorNumero = 0;

// for (index = 1; index <= 50; index += 1 ){
  
//   if (index % 2 === 0){
//     numerosPrimos.push(index)
//   }
// }

// for (index = 0; index < numerosPrimos.length; index += 1){
//     if (numerosPrimos[index] > maiorNumero){
//       maiorNumero = numerosPrimos[index];
//     }
// }
// console.log("O maior numero é:", maiorNumero);


// let numero = 10;
// let array1 = [];
// let multi=0;
// let resultado = 0;

// for (index1 = numero -1 ; index1 > 0; index1 -= 1){
//   array1.push(index1);

// }
// for(index2 = numero -1; index2 > 0; index2 -= 1){
//   multi = numero*array1[index2];
// }
// console.log(array1);

let numero = 10;
let multi1 = numero*(numero-1);
let multi2 = 0;

for(let index = numero -2; index >0; index -= 1){
  
  multi2 = multi1*index;
  multi1 = multi2;

}
console.log(multi1)
