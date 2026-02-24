const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}

const res1 = Object.assign(producto, medidas)
const res2 = { ...producto, ...medidas }

console.log(res1);
console.log(res2);
