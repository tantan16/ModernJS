// METODOS DE ARREGLOS 

const carrito = [
    {nombre:"Monitor 27 pulgadas", precio: 500},
    {nombre:"Computadora", precio: 1500},
    {nombre:"Teclado inalámbrico", precio: 200},
    {nombre:"Mouse alámbrico", precio: 50},
    {nombre:"Audífonos modernoss", precio: 100},
    {nombre:"Memoria USB", precio: 5}
]



// Función que muestra el contenido del carrito y sus detalles
for(let i = 0; i< carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// Ahora usando un array method

carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})