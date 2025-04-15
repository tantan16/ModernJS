//BUENAS PRÁCTICAS AL TRABAJAR CON OPERADORES

// SIMPLIFICAR si quieres poner = a true entonces no pones = a true 

const autenticado = true; 

if(autenticado){
    console.log('El usuario está autenticado');
}



// Mensajes de felicitaciones por puntaje, colocar en el orden correcto para que se cumolan las condiciones

const puntaje = 500;

if(puntaje > 400){
    console.log('Excelente')
} else if(puntaje > 300){
    console.log('Muy bien')
}