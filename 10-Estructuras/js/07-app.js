//OPERADOR OR 
const efectivo = 300;
const credito = 400;
const disponible = credito + efectivo;
const totalPagar = 600; 

if(effectivo > totalPagar || credito > totalPagar || disponible >totalPagar){
    console.log('Puedes pagar')
} else{
    console.log('Fondos insuficientes');
}