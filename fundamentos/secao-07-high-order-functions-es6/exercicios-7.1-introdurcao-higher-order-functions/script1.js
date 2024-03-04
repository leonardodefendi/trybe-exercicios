const generateEmail = (fullName) => {
  let newArray = fullName.split('')
  for(let index = 0; index < newArray.length; index += 1) {
    if(newArray[index] === ' ') {
      newArray[index] = '_';
    }
  }
  return {fullName, email:`${newArray.join('').toLowerCase()}@trybe.com`}
}


const newEmployees = (chamada) => {
  const employees = {
    id1: chamada('Pedro Guerra'),
    id2: chamada('Luiza Drumond'),
    id3: chamada('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(generateEmail));