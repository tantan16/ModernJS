// EVENT BUBBLING


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', e  =>{
    e.stopPropagation()     //se utilzia para no propagar un evento
    console.log('click en card');
}
)

infoDiv.addEventListener('click', e =>{
    e.stopPropagation()   
    console.log('click en info');
}
)

titulo.addEventListener('click', e =>{
    e.stopPropagation()   
    console.log('click en titulo');
}
)