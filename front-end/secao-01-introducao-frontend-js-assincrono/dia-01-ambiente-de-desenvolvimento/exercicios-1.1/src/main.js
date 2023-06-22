import validator from 'validator'
import './style.css'

const buttonValidate = document.querySelector('button');
const verifica = document.querySelector('#info');
const valueInput = document.querySelector('#input');
const selectValue = document.querySelector('#select-cpf-email');

buttonValidate.addEventListener('click', (event) => {
  event.preventDefault();
  
  const verificacoes = {
    cpf: validator.isTaxID(valueInput.value, 'pt-BR'),
    email: validator.isEmail(valueInput.value),
    url: validator.isURL(valueInput.value),
    cep: validator.isPostalCode(valueInput.value, 'BR'),
    rgb: validator.isRgbColor(valueInput.value),
  };

  verifica.innerHTML = `A verificação retornou ${verificacoes[selectValue.value]}`;
  if (verificacoes[selectValue.value]) {
    verifica.classList.remove('red')
    verifica.classList.add('green');
  } else {
    verifica.classList.remove('green');
    verifica.classList.add ('red');
  } 

 
})
