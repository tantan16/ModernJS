// QUERY SELECTOR

// Retorna máximo un elemento pero te deja seleccionar ID y clases
const card = document.querySelector('.card');
console.log(card);


// Se puede tener selectores específicos como en CSS 
const infor = document.querySelector('.premium .info')
console.log(infor);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionando ID 
const formulario = document.querySelector('#formulario');
console.log(formulario);


// Seleccionar elementos HTML 

const navegacion = document.querySelector('nav');
console.log(navegacion);

