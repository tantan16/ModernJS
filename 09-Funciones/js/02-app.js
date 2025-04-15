// differences between function declaration and function expression

// con function declaration puedes usar la función 
// antes de declararla por el hoisting
sumar();
function sumar(){
    console.log(2+2);
}


// function expresion no se puede usar antes de declararla 
sumar2();
const sumar2 = function{
    console.log( 3 +3);
}





