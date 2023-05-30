const studentRegister = (name, age) => {
try {
  return verifyInputsValue(name, age);
} catch (error) {
  return error.message;
}
}


const verifyInputsValue = (name, age) => {
  if(name === '' || age === '') {
    throw new Error ('Todas as informações são necessárias');
  } if (age < 18) {
    throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas');
  } if (age >= 18) {
    return `${name}, seja bem-vindo(a) á AuTrybe!`
  }
}

