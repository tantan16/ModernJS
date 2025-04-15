//OPERADOR && PARA UNA O MÀS CONDICIONES
const usuario = false
const puedePagar = false;

if(usuario && puedePagar){
    console.log('Si puedes comprar')
}else if (!puedePagar && !usuario){
    console.log('No puedes comprar')
} 
else if(!usuario){
    console.log('Inicia sesión o crea una cuenta')
} else if(!puedePagar){
    console.log('Fondos insuficientes, intenta otro método de pago')
}
