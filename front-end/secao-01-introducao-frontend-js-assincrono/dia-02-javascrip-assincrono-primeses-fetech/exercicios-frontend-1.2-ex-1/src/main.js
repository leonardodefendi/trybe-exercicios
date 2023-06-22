import './style.css';

const superHeroimg = document.querySelector('#image');
const superHeroName = document.querySelector('#name');
const btnSortear = document.querySelector('#btn-sortear');
const numberMax = 1000;
const sorteadorNumero = () => Math.round(Math.random() * numberMax);

btnSortear.addEventListener('click', () => {
  superHeroimg.src = '';
  superHeroName.innerHTML = '';
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${sorteadorNumero()}.json`)
    .then((response) => response.json())
    .then((data) => {
      superHeroName.innerHTML = data.name;
      superHeroimg.src = data.images.md;
    })
    .catch((error) => error.message);
});
