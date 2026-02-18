const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true,
    mostrarPrecio: function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);

    }
}

console.log(Object.keys(producto));
console.log(Object.entries(producto));
console.log(Object.values(producto));
