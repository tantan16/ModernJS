// DESTRUCTURING DE ARRAYS 

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio : 300, 
    disponible: true
}



// Destructuring
const {nombre} = producto; 
console.log(nombre);


// Destructuring arreglos 

const numeros = [10, 20, 30, 40, 50];
 // Extraer en orden del 1 al 3
const [uno, dos, tres] = numeros; 
console.log(dos);

// Extraer sólo el tercero 
const[ , , , cuarto] = numeros;
console.log(cuarto);

// Destructuring conservando solo algunos elementos del arreglo y 
// creando un arreglo  nuevo con el resto 

const[primero, segundo, ...tercero] = numeros;