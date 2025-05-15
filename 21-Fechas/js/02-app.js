const diaHoy = new Date(); 

moment.locale('es');

//Mostrara la fecha en un formato específico
console.log(moment().format('MMM Do YY'));

//Hacer operaciones con las fechas

console.log(moment().add(3,'months').calendar())
