const backgroundColor = document.querySelectorAll('.btnback');
const body = document.body;
const trocarFundo = () =>{
  for(let index = 0; index < backgroundColor.length; index += 1){
  backgroundColor[index].addEventListener('click', (event) =>{
    const colorbackground = event.target.innerText;
    body.style.backgroundColor = colorbackground
    localStorage.setItem('background', colorbackground);
  })
  }
};                           


const colorText = document.querySelectorAll('.btncolortext');
const changeColorText = () => {
  for(index = 0; index < colorText.length; index += 1){
    colorText[index].addEventListener('click', (event) =>{
      body.style.color = event.target.innerText;
      localStorage.setItem('colortext', event.target.innerText)
    })
  }
};

const textSize = document.querySelectorAll('#font-size > button');
const changeTextSize = () =>{
  for(index = 0; index < textSize.length; index += 1){
    textSize[index].addEventListener('click', (event) =>{
      body.style.fontSize = event.target.innerText;
      localStorage.setItem('textsize', event.target.innerText)
    })
  }
};

const lineHeight = document.querySelector ('#line-height')
const lineHeightChild = lineHeight.children;
const changeLineHeight = () =>{
  for(index = 1; index < lineHeightChild.length; index += 1){
    lineHeightChild[index].addEventListener('click', (event) =>{
      body.style.lineHeight = event.target.innerText;
      localStorage.setItem('lineheight', event.target.innerText)
    })
  }
};

const fontFamily = document.querySelectorAll('#font-family > button');
const changeFontFamily = () => {
  for(index = 0; index < fontFamily.length; index += 1){
    fontFamily[index].addEventListener('click', (event) =>{
      body.style.fontFamily = event.target.innerText;
      localStorage.setItem('fontfamily', event.target.innerText);
    })
  }
};

const localStorageRecovery = () =>{
  const restore = localStorage.getItem('background')
  body.style.backgroundColor = restore

  const restoreColorText = localStorage.getItem('colortext');
  body.style.color = restoreColorText;

  const restoreTextSize = localStorage.getItem('textsize');
  body.style.fontSize = restoreTextSize;

  const restoreLineHeight = localStorage.getItem('lineheight');
  body.style.lineHeight = restoreLineHeight;

  const restoreFontFamily = localStorage.getItem('fontfamily');
  body.style.fontFamily = restoreFontFamily;
}

window.onload = () =>{
changeFontFamily();
changeLineHeight();
changeColorText();
trocarFundo();
changeTextSize();
localStorageRecovery();
}
