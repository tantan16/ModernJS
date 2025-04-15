// FIND INDEX PARA ENCONTRAR LA POSICIÓN EN UN ARRAH

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar el índice de abril con findindex

const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);

// si retorna -1 es que no pudo encontrarlo

// Ejercicio sola 

const mio = carrito.findIndex(producto => producto.nombre === 'Teclado');
console.log(mio);
// sI HAY MAS DE UN ELEMENTO CON EL MISMO VALOR SÓLO RETORNA EL PRIMERO