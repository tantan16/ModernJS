// DESTRUCTURING DE OBJETOS

const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true,

}

// Extraccion de propiedades del objeto y asignación a una variable  object distructuring 

const {nombre, precio, disponible} = producto; 


console.log(nombre);
console.log(precio);
console.log(disponible);
