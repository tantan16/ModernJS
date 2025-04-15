
// FUNCIONES QUE RETORNAN VALORES 

function sumar(a, b){
    return a + b;
}

const resultado = sumar(8,9);

console.log(resultado);

// Ejemplo más avanzado 
let total = 0; 

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
     return total * 1.15;
}


total = agregarCarrito(100);
total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

const totalPagar =  calcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar}`);

console.log(total);