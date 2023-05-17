const backgroundColor = document.querySelectorAll('.btnback');
const body = document.body;
const trocarFundo = () =>{
  for(let index = 0; index < backgroundColor.length; index += 1){
  backgroundColor[index].addEventListener('click', (event) =>{
    body.style.backgroundColor = event.target.innerText;
  })
  }
}                           
trocarFundo();




