const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo la canción con el id: ${id}`),
    pausar: () => console.log('en pausa...'),
    borrar: () => console.log('Borrando canción'),
    crearPlaylist: playlist => console.log(`Se creo la playlist de: ${playlist}`),
    reproduciendoPlaylist: playlist => console.log(`Reproduciendo la playlist: ${playlist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion
        console.log(`Añadiendo canción: ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`Escuchando la canción: ${this.cancion}`);
        return this.cancion
    }
}

reproductor.nuevaCancion = 'eooo'
reproductor.reproducir(13)
reproductor.reproducir(23)
reproductor.pausar()
reproductor.borrar()
reproductor.crearPlaylist('Pop')
reproductor.crearPlaylist('Rock')
reproductor.reproduciendoPlaylist('Baladas')
reproductor.obtenerCancion
