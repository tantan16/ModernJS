// EVITAR EVENT BUBBLING CON DELEGATION
const cardDiv = document.querySelector('.card');



cardDiv.addEventListener('click', e  =>{
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en tìtulo')
    }

    if(e.target.classList.contains('precio')){
        console.log('Diste click en el precio')
    }

    if(e.target.classList.contains('card')){
        console.log('Diste click en card')
    }
}
)

