// ELIMINAR ELEMENTOS DE LOCAL STORAGE

localStorage.removeItem('nombre'); 

//Actualizar registro para tener un cloud completo 
const meses = ['Enero', 'Febrero', 'Marzo'];

const mesesString = JSON.stringify(meses)
localStorage.setItem('meses', mesesString);


const mesesArray = JSON.parse(localStorage.getItem('meses'));

console.log(mesesArray);

mesesArray.push('nuevo mes');

console.log(mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));


// LIMPIA TODO EL STORAGE
localStorage.clear();