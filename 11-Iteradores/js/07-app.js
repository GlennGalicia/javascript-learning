const pendientes = ['Tarea', 'Leer', 'Estudiar JS']
const carrito = [
    { nombre: 'Monitor 4K', precio: 4800 },
    { nombre: 'Lampara', precio: 1800, descuento: true },
    { nombre: 'Ipad', precio: 10800 },
    { nombre: 'Teclado', precio: 800 },
    { nombre: 'Mouse', precio: 2800 },
]

for (const pendiente of pendientes) {
    console.log(pendiente);
}

for (const producto of carrito) {
    console.log(producto);
}
