// Eliminar un elemento del DOM 

// Eliminar un elemento desde el DOM

//const primerEnlace = document.querySelector('a');
//primerEnlace.remove(); // así se quita del DOM


//Eliminar desde el padre 

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);
