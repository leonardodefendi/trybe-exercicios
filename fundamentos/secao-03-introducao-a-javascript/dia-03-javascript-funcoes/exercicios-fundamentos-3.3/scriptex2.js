

function indiceDoMaior(array) {
  let maior = 0;
  for (let i = 0; i < array.length; i +=1) {
    if (array[i] > array[maior]) {
      maior = i;
    }
  }
  return maior;
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));
console.log(indiceDoMaior([9, 1, 3, 5, 7]));
