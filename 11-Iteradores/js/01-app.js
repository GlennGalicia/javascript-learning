for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Numero ${i} es par`);
    } else {
        console.log(`Numero ${i} es impar`);
    }
}

const carrito = [
    { nombre: 'Monitor 4K', precio: 4800 },
    { nombre: 'Lampara', precio: 1800 },
    { nombre: 'Ipad', precio: 10800 },
    { nombre: 'Teclado', precio: 800 },
    { nombre: 'Mouse', precio: 2800 },
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}
