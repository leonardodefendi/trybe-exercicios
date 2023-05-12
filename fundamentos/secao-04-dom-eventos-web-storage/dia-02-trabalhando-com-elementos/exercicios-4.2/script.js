// 1Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const body = document.querySelector('body');
const adicionaH1 = document.createElement('h1');
adicionaH1.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(adicionaH1);

// 2Adicione a tag main com a classe main-content como filho da tag body;
const adicionaMain = document.createElement('main');
body.appendChild(adicionaMain);
const main= document.querySelector('main');

// 3Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const adicionaSection = document.createElement('section');
adicionaSection.classList.add('center-content');
main.appendChild(adicionaSection);

// 4Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const centerContent = document.querySelector('.center-content');
const criaParagraph = document.createElement('p');
criaParagraph.innerText = 'Olá mundo!';
centerContent.appendChild(criaParagraph);

// 5Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftContent = document.createElement('section');
leftContent.classList.add('left-content');
// leftContent.innerText = 'Texto do lado esquerdo';
main.appendChild(leftContent);

// 6Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightContent = document.createElement('section');
rightContent.classList.add('right-content');
// rightContent.innerText = 'Texto do lado direito'
main.appendChild(rightContent);

// 7Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.classList.add('small-image');
leftContent.appendChild(imagem);

// 8Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
const createUl = document.createElement('ul');
