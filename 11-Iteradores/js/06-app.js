const pendientes = ['Tarea', 'Leer', 'Estudiar JS']
const carrito = [
    { nombre: 'Monitor 4K', precio: 4800 },
    { nombre: 'Lampara', precio: 1800, descuento: true },
    { nombre: 'Ipad', precio: 10800 },
    { nombre: 'Teclado', precio: 800 },
    { nombre: 'Mouse', precio: 2800 },
]

pendientes.forEach((pendiente, index) => {
    console.log(`${index}: ${pendiente}`);
})

carrito.forEach((producto) => {
    console.log(`El producto: ${producto.nombre} tiene precio de: ${producto.precio}`);
})

const nuevoArreglo = carrito.map((producto) => producto)
console.log(nuevoArreglo);
