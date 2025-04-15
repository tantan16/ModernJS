// Cambiar el CSS con JS

//const encabezado = document.querySelector('h1');
//encabezado.style.backgroundColor = 'red';
//encabezado.style.fontFamily = 'patria';

//SE PUEDE AGREGAR CLASES A LOS ELEMENTOS DE HTML

const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
card.classList.remove('card');
console.log(card.classList);