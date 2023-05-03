let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maior = numbers[0];
let menor = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
  soma = soma + numbers[index];
}
// -------------------------------------------------------------------------
let media = soma/numbers.length

if(media > 20){
  console.log("O valor da média aritmética é maior que 20");
}
else{
  console.log("O valor da média aritmética é menor ou igual a 20");
}
// -----------------------------------------------------------------------
for(let index = 0; index < numbers.length; index += 1){
  if (numbers[index] > maior ) {

  
    maior = numbers[index];

  }
}
console.log(maior);
//  ------------------------------------------------------------------
for(let index = 0; index < numbers.length; index +=1){
  
  if(numbers[index]%2 != 0){
    soma = soma +1 ;
  }
}
console.log(soma);

if(soma === 0){
  console.log("Não existe numeros impares")
}

// --------------------------------------------------------------------
for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < menor){
    menor = numbers[index];
  }
}
console.log ("O menor numero é", menor);


