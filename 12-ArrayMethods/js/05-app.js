const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let item;

carrito.forEach((producto, index) => {
    if (producto.nombre === 'Tablet') {
        item = carrito[index]
    }
})
console.log(item);

const res1 = carrito.find(producto => producto.precio === 300)
console.log(res1);
