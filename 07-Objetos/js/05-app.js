//OBJETOS DENTRO DE OBJETOS
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


console.log(producto); 
console.log(producto.informacion);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.origen.pais);
