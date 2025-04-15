const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true,

}

//agregar nuevas porpuedades al objeto
producto.imagen = "imagen.jpg";



// Eliminar propiedades del objeto 

delete producto.disponible; 

console.log(producto);
