// WHILE LOOP
let i = 1; 
//while(1<10){
    console.log(`Numero ${i}`)    


    i ++;
//}


while(i < 100){
    if ( i %3 === 0 & i %5 ===0){
        console.log(`${i} Fizz buzz`)
    } else if( i %3 ===0){
        console.log(`${i} Fizz`)
    }else if( i %5 ===0){
        console.log(`${i} Buzz`)
    }

    i++;
}