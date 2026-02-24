'use strict'

const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true
}

Object.freeze(producto)

producto.disponible = false
producto.imagen = 'img.jpg'

console.log(producto);

