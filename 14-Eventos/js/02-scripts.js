
const nav = document.querySelector('.navegacion');

//Registrar un evento 
nav.addEventListener('click', () => {
    console.log('click en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando en la navegación');
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegación');
})

// mousedown - similar al click
// click
// dblclick - doble click
// mouseup - cuando sueltas el mouse
