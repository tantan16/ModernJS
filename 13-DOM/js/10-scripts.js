// Generar HTML con JS 
const enlace = document.createElement('a');

enlace.textContent = 'nuevo enlace';
console.log(enlace);

// Agregandolo al texto 
enlace.textContent = 'nuevo Enlace';

// Añadiendo atributos

enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

// enlace.onclick = miFuncion;

// Seleccionar la navegación

const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);

//navegacion.appendChild(enlace); // este lo inserta al final
//navegacion.insertBefore(enlace, navegacion.children[1]);

//function miFuncion() {
//    alert('Diste click');
//}

// Crear un Card 

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '800 pesos x persona';
parrafo3.classList.add('precio');

// Crear Div con la clase 'Info'

const info = document.createElement('div'); 
info.classList.add('info')
console.log(info);

// Agregar texto

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear imagen 
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear card 
const card = document.createElement('div');
card.classList.add('card');

// Asidnar la imagen 
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

// Insertar en html 

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);