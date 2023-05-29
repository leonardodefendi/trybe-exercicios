const media = (n1, n2, n3, n4) =>{
  try{
    verifyNumbers(n1, n2, n3, n4);
    return (n1 + n2 + n3 + n4)/4
  } catch (erro) {
      return erro.message
  }
}



const verifyNumbers = (n1, n2, n3, n4) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number' ){
    throw new Error('Erro, é necessario que seja numeros')
  }
}

console.log(media('2', 70, 70, 70));