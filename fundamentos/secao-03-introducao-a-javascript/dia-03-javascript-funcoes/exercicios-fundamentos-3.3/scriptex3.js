function indiceDoMaior(array) {
  let menor = 0;
  for (let i = 0; i < array.length; i +=1) {
    if (array[i] < array[menor]) {
      menor = i;
    }
  }
  return menor;
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));
console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]));
