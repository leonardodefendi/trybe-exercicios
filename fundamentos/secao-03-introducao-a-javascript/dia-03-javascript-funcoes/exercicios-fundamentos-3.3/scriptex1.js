
function verificaPalindromo(palavra) {
  let palavraInvertida = palavra.split("").reverse().join("");
  return palavra === palavraInvertida;
}

console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo('desenvolvimento'))