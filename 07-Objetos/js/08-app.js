
//USE STRICT, NO PERMITE QUE SE ESCRIBA MAL CÓDIGO

"use strict";

const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true,

}

Object.freeze(producto);

delete producto.precio;

console.log(producto);

//use strict nos deja usar Object Methods


console.log(Object.isFrozen(producto));

