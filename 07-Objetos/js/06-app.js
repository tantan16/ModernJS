const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true,
    informacion: {
        medidas:{
            peso: '1kg',
            altura: '1m',
        }, 
        origen:{
            pais:'china'
        }

    }
        
}

// DESTRUCTURING DE OBJETOS ANIDADOS 

const {nombre, informacion, informacion:{fabricacion:{pais}}} = producto; 

console.log(nombre);

console.log(informacion);

console.log(pais);