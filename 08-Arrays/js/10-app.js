// DIFERENCIAS ENTRE FOREACH AND MAP 

const carrito = [
    {nombre:"Monitor 27 pulgadas", precio: 500},
    {nombre:"Computadora", precio: 1500},
    {nombre:"Teclado inalámbrico", precio: 200},
    {nombre:"Mouse alámbrico", precio: 50},
    {nombre:"Audífonos modernoss", precio: 100},
    {nombre:"Memoria USB", precio: 5}
]


// FOREACH

carrito.forEach(function(producto) {
   return`${producto.nombre} - Precio: ${producto.precio}`;
})


// MAP CREA UN ARREGLO NUEVO 

const nuevoArreglo = carrito.map(function(producto){
    return`${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);