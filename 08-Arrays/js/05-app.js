const carrito = [];

// definir un producto 

const producto = {
    nombre:  "Monitor de 20 pulgadas",
    precio: 400
}

const producto2 = {
    nombre:  "Celular",
    precio: 800
}

// agregar un producto al carrito

carrito.push(producto);
carrito.push(producto2);

// agregar un producto al carrito, al inicio del arreglo 
const producto3 = {
    nombre : 'Teclado',
    precio: 50
}


carrito.unshift(producto3);

console.table(carrito);

