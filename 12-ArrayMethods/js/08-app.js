// USOS SPREAD OPERATOR Y REST OPERATOR
const año = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Spread operator no modifica el arreglo original 

const calendario = [...año, 'Agosto'];
console.log(calendario);

// Spread operator con objetos 

const producto = { nombre: 'Disco Duro', precio : 300};
const carritoActualizado = [...carrito, producto];
console.log(carritoActualizado);