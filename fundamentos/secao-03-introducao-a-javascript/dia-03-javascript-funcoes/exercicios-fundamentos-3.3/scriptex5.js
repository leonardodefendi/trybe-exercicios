
// function maisRepetido (numero){
//   let numeroMaisRepetido = 0;
  
  
//   for(let index = 0; index < numero.length; index +=1){
//     for (let index2 = 0; index2 < index; index2 +=1)
//       if(numero[index] === numero[index2]){
//         numeroMaisRepetido +=1
        
//       }
//   }
//   return numeroMaisRepetido;
// }
// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));








// function maisRepetido (numero){
//   let numeroRepetido = 0;
//   let contador =0;
  
//   for(let values of numero){
//     if (numero[values] > numero[contador] );
//     contador +=1 ;
//   }
//   return contador;
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))


/* function maisRepetido (numero){
    let numeroMaisRepetido = 0;
    
    
    for(let index = 0; index < numero.length; index +=1){
      for (let index2 = 0; index2 < index; index2 +=1)
        if(numero[index] === numero[index2]){
          numeroMaisRepetido +=1
          
        }
    }
    return numeroMaisRepetido;
  }
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); */


  function maisRepetido(array) {
    let contagem = {};
    let maisRepetido = array[0];
    
    for (let num of array) {
      contagem[num] = (contagem[num] || 0) + 1;
      
      if (contagem[num] > contagem[maisRepetido]) {
        maisRepetido = num;
      }
    }
    
    return maisRepetido;

    
  }
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
  console.log(maisRepetido([2, 3, -2, 3, -2, 2, 3]));
  
  
  
  