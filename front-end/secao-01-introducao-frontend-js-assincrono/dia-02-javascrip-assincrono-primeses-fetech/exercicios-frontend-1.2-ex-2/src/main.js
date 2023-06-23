import './style.css';

const btnDog = document.querySelector('#btn-dog');
const btnCat = document.querySelector('#btn-cat');
const btnSurprise = document.querySelector('#btn-surprise');
const imgRandom = document.querySelector('#img-random');
const generateNumber = () => Math.round(Math.random());

const cat = () => {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      imgRandom.src = '';
      imgRandom.src = data[0].url;
      imgRandom.classList.add('tamanho');
    });
};
const dog = () => {
  imgRandom.src = '';
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      imgRandom.src = data.message;
    });
};
btnCat.addEventListener('click', cat);

btnDog.addEventListener('click', dog);

const surprise = () => {
  imgRandom.src = '';
  if (generateNumber() === 1) {
    cat();
  }
  dog();
};

btnSurprise.addEventListener('click', surprise);
