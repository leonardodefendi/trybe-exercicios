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
  const skills = ['html', 'css', 'JavaScript '];
  let final = "";
  for (let index in skills){
    final += 'para ${skills[index]}';
  }
return final;
}

console.log(minhasSkills(substituaX("Bebeto")));