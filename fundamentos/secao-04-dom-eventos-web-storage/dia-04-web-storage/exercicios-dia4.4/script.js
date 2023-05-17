const backgroundColor = document.querySelectorAll('.btnback');
const body = document.body;
const trocarFundo = () =>{
  for(let index = 0; index < backgroundColor.length; index += 1){
  backgroundColor[index].addEventListener('click', (event) =>{
    body.style.backgroundColor = event.target.innerText;
  })
  }
};                           


const colorText = document.querySelectorAll('.btncolortext');
const changeColorText = () => {
  for(index = 0; index < colorText.length; index += 1){
    colorText[index].addEventListener('click', (event) =>{
      body.style.color = event.target.innerText;
    })
  }
};

const textSize = document.querySelectorAll('#font-size > button');
const changeTextSize = () =>{
  for(index = 0; index < textSize.length; index += 1){
    textSize[index].addEventListener('click', (event) =>{
      body.style.fontSize = event.target.innerText;
    })
  }
};

const lineHeight = document.querySelector ('#line-height')
const lineHeightChild = lineHeight.children;
const changeLineHeight = () =>{
  for(index = 1; index < lineHeightChild.length; index += 1){
    lineHeightChild[index].addEventListener('click', (event) =>{
      body.style.lineHeight = event.target.innerText;
    })
  }
};


changeLineHeight();
changeColorText();
trocarFundo();
changeTextSize();

