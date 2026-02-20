const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const mesesResultado = [...meses, 'Agosto']
console.log(mesesResultado);

const producto = { nombre: 'Disco Duro', precio: 500 }
const carritoResultado = [...carrito, producto]
console.log(carritoResultado);

