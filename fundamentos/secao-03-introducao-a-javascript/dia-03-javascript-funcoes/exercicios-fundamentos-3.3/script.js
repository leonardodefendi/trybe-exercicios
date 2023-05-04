
let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

function checkIntegerPositive(lado1, lado2, lado3){
  let verificacao = false;
  if(Number.isInteger(lado1)){
    let verificacao = true;
  }
  return verificacao;
}

console.log(checkIntegerPositive(9));