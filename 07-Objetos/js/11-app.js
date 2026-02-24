const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true,
    mostrarPrecio: function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);

    }
}

producto.mostrarPrecio()
