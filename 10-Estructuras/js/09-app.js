//OPERADOR TERNARIO
const autenticado = true; 
const puedePagar = false;

console.log(autenticado || puedePagar? 'si está autenticado': 'no está autenticado')
console.log(autenticado && puedePagar? 'si está autenticado': 'no está autenticado')

// ternario anidado

console.log(autenticado? puedePagar? 'Si está autenticado y puede pagar': 'Si está autenticado pero no puede pagar': 'No está autenticado')