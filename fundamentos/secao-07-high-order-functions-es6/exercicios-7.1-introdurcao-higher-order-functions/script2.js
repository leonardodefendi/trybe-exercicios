const generateNumbers = () => {
  return Math.floor(Math.random()  * 6)
}

const verify = (verifica) => {
  if(verifica === generateNumbers()) {
    return 'Parabéns você ganhou'
  }
  return 'Tente novamente'
}

console.log(verify(1))