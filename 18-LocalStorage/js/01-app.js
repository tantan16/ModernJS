// 1. ALMACENAR LOS DATOS EN LOCAL STORAGE-

localStorage.setItem('nombre', 'Tancha');

//Local storage sólo almacena 

const producto ={
    nombre: "Monitor de 24 pulgadas",
    precio: 300
}

// Se convierte el objeto JSON a una cadena de texto
const productoString = JSON.stringify(producto);

// Se agrega a localstorage

localStorage.setItem('producto', productoString);
