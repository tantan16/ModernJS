const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true,

}

Object.freeze(producto);

delete producto.precio;

//No se agregan ni eliminan propiedades pero se pueden modificar las existentes
producto.disponible = false;
//producto.imagen = "imagen.jpg";
// delete producto.precio;


console.log(producto);

// saber si un objeto está sellado 

console.log(Object.isSealed(producto));





