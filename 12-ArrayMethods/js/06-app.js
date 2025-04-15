
// EVERY

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// PARA USAR EVERY TODOS LOS ELEMENTOS ANALIZADOS DEBEN CUMPLIR CON LA CONDICIÓN 

const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);
