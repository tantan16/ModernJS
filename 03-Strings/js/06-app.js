const producto = `Monitor de 20 pulgadas`; 

// .repeat este método te permite repetir una cadena de texto 
const texto = "En promoción".repeat(4);
console.log(texto); 
console.log(`${producto} ${texto}!!!`);

// Split, este método te permite dividir un string 
// ejemplo para dividir una cadena de texto en sus palabras 
const actividad = "Estoy aprendiendo JS moderno";
console.log(actividad.split(" ")); 
// ejemplo para dividir un string por los separadores 
// que usa, en este caso comas 

const hobbies = "Leer, Caminar, Bouldering, Cine, Escuchar Música";
console.log(hobbies.split(",")); 