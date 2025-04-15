// FOR LOOP

//for(let i = 0; i < 10; i+=2){
//   console.log(`Numero: ${i}`);
//}


/// EJERCICIO DE ENTREVISTA IDENTIFICAR UN NUMERO PAR RESIDUO (MODAL)

//for(let i = 0; i < 20; i++){
    if (i % 2 ===0){console.log(`El nùmero ${i} es PAR`)
} else {
    console.log(`El número ${i} es IMPAR`)
}
//}



const carrito = [
    {nombre:'Monitor 27 pulgadas', precio: 500},
    {nombre:'Television', precio: 100},
    {nombre:'Tablet', precio: 500},
    {nombre:'Audifonos', precio: 500},
    {nombre:'Teclado', precio: 500},
    { nombre:'Celular', precio: 500}, 
]

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}