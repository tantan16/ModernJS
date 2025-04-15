const navegacion = document.querySelector('nav');
console.log(navegacion);
console.log(navegacion.childNodes); //Muestra los elementos pero los espacios en blanco tb los considera como elementos
console.log(navegacion.children);

//Nodos

//console.log(navegacion.children[1].nodeName);
//console.log(navegacion.children[1].nodeType);

// EJEMPLO TRAVERSING THE DOM PARA UN CARD 

//const card = document.querySelector('.card');
//card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
//console.log(card.children[1].children[1].textContent);

//card.children[0].src = 'img/hacer4.jpg';
//console.log(card.children[0]);

// TRAVERSING THE DOM DEL HIJO AL PADRE 
//console.log(card.parentNode); // Este muestra los elementos vacíos
//console.log(card.parentElement.parentElement.parentElement); // se puede colocar parenteElement hasta llegar al padre de padres. 

// TRAVERSING THE DOM ELEMENTOS HERMANOS 
//console.log(card);
//console.log(card.nextElementSibling);
//console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);