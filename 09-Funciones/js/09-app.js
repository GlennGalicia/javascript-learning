const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo la canción con el id: ${id}`);
    },
    pausar: function () {
        console.log('en pausa...');

    },
    borrar: function () {
        console.log('Borrando canción');
    },
    crearPlaylist: function (playlist) {
        console.log(`Se creo la playlist de: ${playlist}`);
    },
    reproduciendoPlaylist: function (playlist) {
        console.log(`Reproduciendo la playlist: ${playlist}`);

    }
}

reproductor.reproducir(13)
reproductor.reproducir(23)
reproductor.pausar()
reproductor.borrar()
reproductor.crearPlaylist('Pop')
reproductor.crearPlaylist('Rock')
reproductor.reproduciendoPlaylist('Baladas')
