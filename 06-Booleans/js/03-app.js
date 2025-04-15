//Buenas prácticas a la hora de evaluar un boolean

// EJEMPLO DE UNA MALA PRÀCTICA 
const autenticado = false;

if(autenticado === true){
    console.log('si puedes ver netglix')
} else{
    console.log('No, no puedes ver netflix')
}


//OPERADORES TERNARIOS 

console.log(autenticado ? 'Si está autenticado': 'No está autenticado');