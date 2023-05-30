const studentRegister = (name, age) => {
try {
  verifyInputsValue(name, age);
  return `${name}, seja bem-vindo(a) á AuTrybe!`
} catch (error) {
  return error.message;
}
}


const verifyInputsValue = (name, age) => {
  if(!name || !age) {
    throw new Error ('Todas as informações são necessárias');
  } if (age < 18) {
    throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas');
  } 
}


console.log(studentRegister('Leonardo', 18))