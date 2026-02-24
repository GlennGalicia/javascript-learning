const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.log(meses.includes('Enero'));

const res1 = carrito.some(producto => producto.nombre === 'Monitor 27 Pulgadas')
console.log(res1);

const res2 = meses.some(mes => mes === 'Agosto')
console.log(res2);

