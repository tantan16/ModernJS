const producto = `Monitor de 20 pulgadas`;


// Metodo para reemplazar texto 

console.log(producto.replace(`pulgadas`, `"`));


// Metodo para cortar una cadena de texto 

console.log(producto.slice(0,10));
console.log(producto.slice(2,1)); // si le pasas un numero mayor al inicio no hace nada


// Alternativa a slice 

console.log(producto.substring(0,10));

console.log(producto.substring(2,1));// Si le pasas un numero mayor al inicio, lo inviert

const usuario = `Juan`;

console.log(usuario.substring(0,1));

//Metodo para cortar la primera letra
console.log(usuario.charAt(0));