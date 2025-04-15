

const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true

}

// se utiliza, por ejemplo para saber si la consulta en la bd del cliente fue exitosa
// llaves
console.log(Object.keys(producto));


// valores
console.log(Object.values(producto));


// todo

console.log(Object.entries(producto));