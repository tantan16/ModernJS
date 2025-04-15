// CREAR OBJETOS CON OBJECT CONSTRUCTOR

//OBJECT LITERAL
const producto = {
    nombre: 'Monitor de 20 pulgadas', 
    precio: 300, 
    disponible: true

}

//OBJECT CONSTRUCTOR

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 24 pulgadas', 550);
console.log(producto2);

const producto3 = new Producto('Tele', 100);
console.log(producto3);