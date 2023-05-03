let word = "tryber";
let palavraInvertida = "";
let letraInvertida = word[word.length -1];

for(index = word.length -1; index >= 0; index -= 1){
  letraInvertida = [word[index]]
  palavraInvertida = palavraInvertida + letraInvertida;
}
console.log(palavraInvertida);
