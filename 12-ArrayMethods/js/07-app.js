
// CONCAT 
// Cómo unir dos arreglos

const meses = ['Enero', 'Febrero', 'Marzo'];
const meses2= ['Abril', 'Mayo', 'Junio', 'Julio'];
const meses3= ['Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

//. concat
const resultado = meses.concat(meses2,meses3);
console.log(resultado);


// spread operator
const resultado2 = [...meses, ...meses2,...meses3];
console.log(resultado2);