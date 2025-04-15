// MAP Y FOR EACH EN ARROW FUNCTION



const carrito = [
    {nombre:"Monitor 27 pulgadas", precio: 500},
    {nombre:"Computadora", precio: 1500},
    {nombre:"Teclado inalámbrico", precio: 200},
    {nombre:"Mouse alámbrico", precio: 50},
    {nombre:"Audífonos modernoss", precio: 100},
    {nombre:"Memoria USB", precio: 5}
]

const nuevoArreglo = carrito.map(producto =>`${producto.nombre} - Precio; ${producto.precio}`)
carrito.forEach(producto => console.log(`${producto.nombre} - Precio; ${producto.precio}`));

console.log(nuevoArreglo);