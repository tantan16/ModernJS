//BREAK Y CONTINUE EN UN FOR LOOP

// 1. BREAK DETIENE POR COMPLETO EL LOOP 

//for(let i = 0; i <= 10; i++){
 //   if( i === 5){
   //     console.log('Cinco');
     //   break;
   // } else{
     //   console.log(`Numero: ${i}`)
    //}
//}


// 2. CONTINUE EJECUTA LA CONDICIÓN Y EL CÓDIGO QUE SIGUE QUE NO
//TENGA QUE VER CON ESA CONDICION
//for(let i = 0; i <= 10; i++){
 //   if( i === 5){
   //     console.log('Cinco');
     //   continue;
   // } else{
     //   console.log(`Numero: ${i}`)
    //}
//}


const carrito = [
    {nombre:'Monitor 27 pulgadas', precio: 500},
    {nombre:'Television', precio: 100},
    {nombre:'Tablet', precio: 500, descuento: true},
    {nombre:'Audifonos', precio: 500},
    {nombre:'Teclado', precio: 500},
    { nombre:'Celular', precio: 500}, 
]

// Ejemplo de descuento
for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
        continue;
    }
    console.log(carrito[i].nombre);
}