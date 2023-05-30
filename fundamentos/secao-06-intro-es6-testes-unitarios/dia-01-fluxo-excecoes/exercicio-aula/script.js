// Jogo do Neidson
let studentGame = [18, 26, 35, 50, 60];
let rodsGame = [10, 20, 30, 40, 50];
// Jogo sorteado
let megaSenaNumbers = [];
for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() * 60) + 1;
  megaSenaNumbers.push(randomNumber);
}
const confereNumero = (game) => {
  if(game.length < 6) {
    throw new Error ('Minimo permitido são 6 numeros');
  }
}
const checker = (game) => {

  for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawnNumber = megaSenaNumbers[index];
    
    for (let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
      let studentNumber = game[gameIndex];
      
      if (drawnNumber === studentNumber) {
        numberOfHits += 1;
      }
    }
  }
  console.log("jogo sorteado", megaSenaNumbers);
  console.log("Jogo do Neidson:", studentGame);
}
// Confere o jogo
function megaSenaChecker (game) {
  let numberOfHits = 0;
  try {
    confereNumero(game);
    checker(game);
    
  } catch (error) {
    console.log(error.message);
    
  }
}

megaSenaChecker(studentGame);

// console.log("Número de acertos:", megaSenaChecker(studentGame));
// console.log("--------");

// console.log("Número de acertos:", megaSenaChecker(rodsGame));
