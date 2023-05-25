// Crie um irmão para elementoOndeVoceEsta.
// const newElement = document.createElement ('section');
// newElement.innerText = 'Hello, word!';
// let pai = document.querySelector('#pai');
// pai.appendChild(newElement);

// // Crie um filho para elementoOndeVoceEsta.
// const newElement2 = document.createElement('section');
// newElement2.innerHTML= '<strong>Agora estou entendendo</strong>';
// let pai2 = document.querySelector('#elementoOndeVoceEsta');
// pai2.appendChild(newElement2);

// // Crie um filho para primeiroFilhoDoFilho.
// const newElement3 = document.createElement('li');
// newElement3.id = 'criado'
// newElement3.innerText ='Finalizando Exercicio';
// let pai3 = document.querySelector('#primeiroFilhoDoFilho');
// pai3.appendChild(newElement3);

// // A partir desse filho criado, acesse terceiroFilho.
// console.log(document.querySelector('#criado').parentNode.parentNode.nextElementSibling);

const element = document.querySelector('#where-are-you').firstElementChild
document.querySelector('#where-are-you').removeChild(element);