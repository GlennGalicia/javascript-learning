for (let i = 1; i <= 20; i++) {

    if (i === 5)
        break
    console.log(`Número: ${i}`);

}

const carrito = [
    { nombre: 'Monitor 4K', precio: 4800 },
    { nombre: 'Lampara', precio: 1800, descuento: true },
    { nombre: 'Ipad', precio: 10800 },
    { nombre: 'Teclado', precio: 800 },
    { nombre: 'Mouse', precio: 2800 },
]

for (let i = 0; i < carrito.length; i++) {

    if (carrito[i].descuento) {
        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue
    }
    console.log(carrito[i].nombre);
}
