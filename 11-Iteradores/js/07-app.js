// for...of
const pendientes = ['Limpiar la sala', 'Lavar la ropa', 'Estudiar JS', 'Hacer mi CV']

const carrito = [
    {nombre:"Monitor 27 pulgadas", precio: 500},
    {nombre:"Computadora", precio: 1500},
    {nombre:"Teclado inalámbrico", precio: 200},
    {nombre:"Mouse alámbrico", precio: 50},
    {nombre:"Audífonos modernoss", precio: 100},
    {nombre:"Memoria USB", precio: 5}
]



for(let pendiente of pendientes){
    console.log(pendiente);
}


for(let producto of carrito){
    console.log(producto.nombre);
}