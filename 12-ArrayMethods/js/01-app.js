// 1. SOME

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// comprobar si existe un mes en el arreglo 

// 1. Manual: usando forEach
meses.forEach(mes =>{
    if( mes === 'Enero'){
        console.log('Enero si existe');
    } else{
        console.log('No existe');
    }
})

// Usando arrow function .includes solo sirve para un arreglo simple

const resultado = meses.includes('Enero');
console.log(resultado)

// Para un arreglo de objetos es .some

const existe = carrito.some( producto =>{
    return producto.nombre === 'Celular';
})

console.log(existe);