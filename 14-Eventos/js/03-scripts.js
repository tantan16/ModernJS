// EVENTOS DEL TECLADO 
const busqueda = document.querySelector('.busqueda'); 

busqueda.addEventListener('keyup', ()=>{
    console.log('escribiendo...');
})

busqueda.addEventListener('blur', ()=>{
    console.log('escribiendo...');
})

busqueda.addEventListener('input', (evt)=>{
    console.log(evt.target.value);//lo que el usuario se encuentra escribiendo
})


