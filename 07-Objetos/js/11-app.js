const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true,
    mostrarInfo: function(){
        console.log('El producto ${this.nombre} tiene un precio de ${this.precio}')
        //busca las propiedades dentro del mismo objeto
    }

}

producto.mostrarInfo();


