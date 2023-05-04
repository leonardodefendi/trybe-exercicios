// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adiocionaCliente (nomeCliente){
//   if(typeof nomeCliente === "string"){
//     clientesTrybeBank.push(nomeCliente);
//     // console.log(clientesTrybeBank);
//   }
//   else{
//     console.log("Error, verifique o nome do cliente");

//   }
//   return clientesTrybeBank
// }


// console.log(adiocionaCliente("Jose"));



// function removeCliente(nomeCliente){
//   if(typeof nomeCliente === "string"){
//     let clienteEncontrado = false;
//     for(index = 0; index < clientesTrybeBank.length; index += 1){
//       if(nomeCliente === clientesTrybeBank[index]){
//         clientesTrybeBank.splice(index, 1)
//         clienteEncontrado = true;
//         return "Cliente removido com sucesso" + nomeCliente
//       }
//     }
//     if(clienteEncontrado === false){
//       return "Cliente não encontrado"
    
//     }
//   }
//   else {
//     return "O parametro passado está incorreto"
//   }
// }

// console.log(removeCliente("John"))
// console.log(clientesTrybeBank)
let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;g
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}

// console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
// console.log(removeCliente('Barney')); // Cliente não encontrada(o)
// console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
// console.log(clienteente(cliente));sTrybeBank); // [ 'Ada', 'Gus' ]
