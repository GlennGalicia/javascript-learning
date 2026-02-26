localStorage.setItem('nombre', 'Glenn')

// object literal
const producto = {
    nombre: 'Monitor 4k',
    precio: 900
}

// arreglo de meses
const meses = ['ene', 'feb', 'mar']

// conversion de objeto a string
const productoString = JSON.stringify(producto)

// conversion de arreglo a string
const mesesString = JSON.stringify(meses)

// guardar datos en localStorage
localStorage.setItem('producto', productoString)
localStorage.setItem('meses', mesesString)
