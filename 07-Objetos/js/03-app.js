const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true
}

// añadir propiedades
producto.imagen = 'img.jpg'
console.log(producto);

// eliminar propiedades
delete producto.disponible
console.log(producto);
