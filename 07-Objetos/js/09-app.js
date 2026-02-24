'use strict'

const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true
}

Object.seal(producto)

producto.disponible = false

console.log(producto);

