const carrito = [
    { nombre: 'Monitor 4K', precio: 4800 },
    { nombre: 'Lampara', precio: 1800 },
    { nombre: 'Ipad', precio: 10800 },
    { nombre: 'Teclado', precio: 800 },
    { nombre: 'Mouse', precio: 2800 },
]

console.table(carrito)

const filterProducts = carrito.map(function (producto) {
    return `Nombre del producto: ${producto.nombre}`
})

console.log(filterProducts);
