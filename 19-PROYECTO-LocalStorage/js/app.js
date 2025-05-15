//VARIABLES
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

//EVENTLISTENERS
eventListeners();


function eventListeners() {
   //Cuando el usuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  // cuando el documento está listo 
  document.addEventListener('DOMContentLoaded', () =>{
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    
    console.log(tweets);

    crearHTML();
  })
}




//FUNCIONES

function agregarTweet(e) {
  e.preventDefault();

  // variable local text area en donde el usuario escribe
  const tweet = document.querySelector("#tweet").value;

  if (tweet === "") {
    mostrarError("Un tweet no puede ir vacío");
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet
  }

  //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

  // Una vez agregado se crea el HTML para mostrar los tweets
  crearHTML()

  // Reiniciar el formulario

  formulario.reset();



}

// funcion para mostrar un mensaje de error
function mostrarError(error) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = error;
  mensajeError.classList.add("error");

  // Insertarlo en el contenido
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//funcion para mostrar el listado de los tweets

function crearHTML (){
    limpiarHTML();

    if (tweets.length > 0){
        tweets.forEach( tweet =>{
            // Agregar botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            
            //Añadir la función de eliminar
            btnEliminar.onclick =() =>{
                borrarTweet(tweet.id);
            }

            //Crear el HTML
            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet.tweet;

            //Asignar el botón
            li.appendChild(btnEliminar);

            //Insertado en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agregar los tweets actuales a localstorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//funcion de borrar tweet 
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

//limpiar HTML 
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild)
    }
};

