// arquivo script.js
const whereAre =document.querySelector('#where-are-you');
const parent = document.querySelector('#where-are-you').parentNode;
// console.log(parent);

const first = document.querySelector('#parent').firstElementChild;
first.innerText = 'Olá mundo';
console.log(document.querySelector('#where-are-you').previousSibling);
// console.log(first2);

const attention = document.querySelector('#where-are-you').nextElementSibling.previousSibling;
console.log(attention);

const thirdChild = document.querySelector('#where-are-you').nextSibling.nextSibling;
const thirdChild2 = document.querySelector('#parent').lastChild.previousSibling;