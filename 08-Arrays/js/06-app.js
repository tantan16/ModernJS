// Agregar elementos a un arreglo utilizando funciones/formas declarativas 

const carrito = [];

// definir un producto 

const producto = {
    nombre:  "Monitor de 20 pulgadas",
    precio: 400
}

const producto2 = {
    nombre:  "Celular",
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}


let resultado; 


resultado = [... carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];



console.table(carrito);
console.table(resultado);