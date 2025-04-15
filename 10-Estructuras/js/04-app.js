// ELSE IF 

const dinero = 399;
const totalApagar = 500;
const tarjeta = true; 
const cheque = false; 

if (dinero >= totalApagar){
    console.log('Si podemos pagar')
} else if (cheque){
    console.log('Si tengo un cheque')

} else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta')
} else{
    console.log('Fondos insuficientes')
}

// SOLO SE EJECUTA EL CÒDIGO HASTA QUE SE CUMPLA LA PRIMERA CONDICIÓN