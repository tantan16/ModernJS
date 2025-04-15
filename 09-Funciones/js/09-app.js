// AÑADIR FUNCIONES EN UN OBJETO
const reproductor = {
    reproducir:function(id){
        console.log(`Reproduciendo canción con el id: ${id}`); 
    }, 
    pausar:function(){
        console.log(`pausar`)
    }
}

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();

// añadir un método propiedad

reproductor.borrar = function(id){
    console.log(`Borrando canción: ${id}`);
}

reproductor.borrar(30);