const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) => {
    if (mes === 'Enero') {
        console.log(`Es mes se encuentra en la posición: ${i}`);
    }
})

const res1 = meses.findIndex(mes => mes === 'Marzo')
console.log(res1);

const res2 = carrito.findIndex(producto => producto.precio === 100)
console.log(res2);
