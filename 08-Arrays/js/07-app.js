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

const producto4 = {
    nombre : 'Mouse',
    precio: 25
}


//carrito.unshift(producto3);

//console.table(carrito);

// Eliminar último elemento de un arreglo 
//carrito.pop();
//console.table(carrito);


// Eliminar del inicio del arreglo 
//carrito.shift();
//console.table(carrito); 


// Eliminar de enmedio del arreglo 
carrito.splice(1,1) //el primer parámetro indica posición, el segundo cuántos elementos
console.table(carrito);
