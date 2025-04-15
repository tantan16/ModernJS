// COMO CONCATENAR DOS TEXTOS 

const producto = "Monitor de 20 pulgadas; ";

const precio = `30 USD`

// MÉTODO CONCAT

console.log(producto.concat(precio)); // se concatenan dos constantes 

console.log(producto.concat(" precio de 30 USD")); // SE CONCATENA DIRECTAMENTE EL STRING

// METODO SIGNO DE SUMA 

console.log(producto + "Con un recio de: " + precio);

// SINTAXIS TEMPLATE LITERALS 

console.log(`El producto ${producto} tiene un precio de ${precio}`);