// REDUCE

//TOMA UNA GRAN CANTIDAD DE DATOS LOS UNE Y ENTREGA UN RESULTADO

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// CALCULAR EL VALOR TOTAL DE COMPRA 

//1. Usando forEach 

let total = 0; // se inicializa esta variable en cero para sumarle los valores x prodducto
carrito.forEach(producto => total += producto.precio);
console.log(total);

//2. Utilizando reduce 

let resultado = carrito.reduce((total,producto) => total + producto.precio, 0);
console.log(resultado);