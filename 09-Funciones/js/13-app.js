const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id: ${id}`),
    pausar:() =>  console.log(`pausar`),
    borrar: id =>  console.log(`Borrando canción: ${id}`),
    crearPlaylist: nombre => console.log(`Se creó la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`),
     
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
reproductor.nuevaCancion = 'Bichota';
reproductor.obtenerCancion;

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist(`Hacer el aseo`);
reproductor.crearPlaylist(`Domingo`);
reproductor.reproducirPlaylist(`Domingo`);