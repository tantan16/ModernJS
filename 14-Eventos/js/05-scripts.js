// EVENTOS DEL SCROLL con mouse

//1. como medir el scroll 
//window.addEventListener('scroll', ()=>{
//    const scrollPX = window.scrollY;
//
//    console.log(scrollPX);
//})

// Detectar en donde se encuentra un elemento

window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 784){
        console.log('El elemento ya está visible')
    } else{
        console.log('Aún no, da más scroll');
    }

})