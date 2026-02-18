const carrito = [
    { nombre: 'Monitor 4K', precio: 4800 },
    { nombre: 'Lampara', precio: 1800 },
    { nombre: 'Ipad', precio: 10800 },
    { nombre: 'Teclado', precio: 800 },
    { nombre: 'Mouse', precio: 2800 },
]

console.table(carrito)

carrito.forEach(function (producto) {
    console.log(`El producto: ${producto.nombre} tiene un precio de: $${producto.precio} `);
})
