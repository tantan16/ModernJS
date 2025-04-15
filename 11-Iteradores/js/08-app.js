// for... in

const pendientes = ['Limpiar la sala', 'Lavar la ropa', 'Estudiar JS', 'Hacer mi CV']

for(let pendiente of pendientes){
    console.log(pendiente);
}
// FOR IN ITERA SOBRE OBJETOS, FOR OF ITERA EN ARREGLOS

const automovil = {
    modelo: 'Camaro',
    año: 1969,
    motor: '6.5'
}

for(let componente in automovil){
    console.log(`${automovil [componente]}`);
}

//Ecmascript 7 
for(let[llave,valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}