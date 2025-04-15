//FOR EACH Y MAP
const pendientes = ['Limpiar la sala', 'Lavar la ropa', 'Estudiar JS', 'Hacer mi CV']

pendientes.forEach( pendiente =>console.log(pendiente));

// map crea un nuevo arreglo, foreach no

const carrito = [
    {nombre:"Monitor 27 pulgadas", precio: 500},
    {nombre:"Computadora", precio: 1500},
    {nombre:"Teclado inalámbrico", precio: 200},
    {nombre:"Mouse alámbrico", precio: 50},
    {nombre:"Audífonos modernoss", precio: 100},
    {nombre:"Memoria USB", precio: 5}
]

const nuevoArreglo = carrito.forEach(producto => producto.nombre);

const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);