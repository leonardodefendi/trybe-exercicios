function substituaX(nome) {
  const frase = 'Tryber x aqui!';
  let arrayFrase = frase.split(" ");
  for (let index in arrayFrase) {
    if (arrayFrase[index] === "x") {
      arrayFrase[index] = nome;
    }
  }
  return arrayFrase.join(' ');
}

// console.log(substituaX("Bebeto"))

function minhasSkills (substituaX){
  const skills = ['html', 'css', 'JavaScript'];
  // let final = substituaX(nome);
  return  `${substituaX}
Minhas três habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}`
   
}

console.log(minhasSkills(substituaX("Bebeto")));