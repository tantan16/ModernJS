const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true,      
}

// Las variables dentro de un objeto si se pueden reescribir
producto.disponible= false; 

console.log(producto);