let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}
// ------------------------------------------------------------------------- requisito 1
function adicionaTurno (object, key, value){

  object[key] = value
  
}

adicionaTurno(lesson2, "turno", 'noturno')
// console.log(lesson2) /
// // ------------------------------------------------------------------------- requisito 2
// function listaKeys (object) {
// let chaves = Object.keys(object);
// return chaves;
// }
// listaKeys(lesson2)
// // console.log(listaKeys(lesson2)) 
// // ------------------------------------------------------------------------- requisito 3
// function tamanhoObjeto(object){
//   let keys = Object.keys(object);
//   let tamanho = keys.length;
// return tamanho;
// }

// console.log(tamanhoObjeto(lesson2));

// // ------------------------------------------------------------------------- requisito 4
// function listObject (object){
//   let values =Object.values(object);
//   return values;
// }


// console.log(listObject(lesson2)) // requisito 4
// // ------------------------------------------------------------------------- requisito 5


let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});
// console.log(allLessons);
// // ------------------------------------------------------------------------- requisito 6
function totalOfStudents (objeto){
let total=0;
let chaves = Object.keys(objeto);
  for (index = 0; index < chaves.length; index +=1)
    total = total + objeto[chaves[index]].numeroEstudantes;

return total
}
console.log(totalOfStudents(allLessons))
// // ------------------------------------------------------------------------- requisito 7

function verificaChaveValor (lesson, keys, value){
  let verifica = false;
  for (let chave in lesson){
   if(chave == keys  && lesson[chave] == value){
    verifica = true;
    break;
    }
  }
  return verifica;

}

console.log(verificaChaveValor(lesson1, 'materia', 'Matemática'));
