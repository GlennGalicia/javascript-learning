const carrito = []

const producto1 = {
    nombre: 'Monitor 4k',
    precio: 4800
}
const producto2 = {
    nombre: 'Iphone 13 mini',
    precio: 10800
}
const producto3 = {
    nombre: 'Ipad 10 pro',
    precio: 10800
}

let resultado = { ...carrito, producto1 }
resultado = { ...resultado, producto2 }

console.table(carrito)
console.table(resultado)
