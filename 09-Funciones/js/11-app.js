// VENTAJAS DE ARROW FUNCTIONS

// declaración de función 
const aprendiendo = function (tecnologia, tecnologia2){
    console.log(`Estoy aprendiendo ${tecnologia}, ${tecnologia2}`)
}



// arrow function
//cuando hay un solo parámetro se pueden omitir los paréntesis
const aprendiendo2 = tecnologia =>`Estoy aprendiendo ${tecnologia}`;

const aprendiendo3 = (tecnologia, tecnologia2) =>{
    console.log(`Estoy aprendiendo ${tecnologia}, ${tecnologia2}`);
}

console.log(aprendiendo2('javascript'));
console.log(aprendiendo3('javascript', 'Node Js'));
