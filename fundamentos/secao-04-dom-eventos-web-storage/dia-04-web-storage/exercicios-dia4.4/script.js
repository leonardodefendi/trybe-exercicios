const backgroundColor = document.querySelectorAll('.btnback');
const body = document.body;
const trocarFundo = () =>{
  for(let index = 0; index < backgroundColor.length; index += 1){
  backgroundColor[index].addEventListener('click', (event) =>{
    body.style.backgroundColor = event.target.innerText;
  })
  }
}                           


const colorText = document.querySelectorAll('.btncolortext')
const changeColorText = () => {
  for(index = 0; index < colorText.length; index += 1){
    colorText[index].addEventListener('click', (event) =>{
      body.style.color = event.target.innerText;
    })
  }
}

const textSize = document.querySelectorAll('#font-size > button')





changeColorText();
trocarFundo();


