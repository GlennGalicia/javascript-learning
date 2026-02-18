const producto = {
    nombre: 'Monitor 4k',
    precio: 4800,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}

const { nombre, informacion: { fabricacion } } = producto
console.log(nombre);
console.log(fabricacion);


