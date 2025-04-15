const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);


// 1. Primer forma de acceder al texto

console.log(encabezado.innerText); // si está hidden en el css no lo muestra
console.log(encabezado.textContent);
console.log(encabezado.innerHTML); // se trae el html


// Se puede hacer chaining 
const encabezado2 = document.querySelector('.contenido-hero h1').textContent = 'Busca tu nueva aventura!';
console.log(encabezado2);

//Se pueden modificar las imágenes del HTML 

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'