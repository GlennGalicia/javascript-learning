const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true
}

// destructuring de objetos
const { nombre, precio } = producto
console.log(`el nombre del producto es: ${nombre} con un precio de ${precio}`);
