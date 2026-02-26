// Importaciones
import { autos } from './db.js'

// Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

// Variable para contenedor de resultados
const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear()
const min = max - 10

// objecto para la busqueda de informacion
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos)
    llenarSelectYear()
})

// Event Listener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
})

// Funciones
function mostrarAutos(autos) {

    // limpiar HTML Resultado
    limpiarHTML()

    autos.forEach(auto => {

        // destructuring de objeto auto
        const { marca, modelo, year, puertas, transmision, precio, color } = auto

        // crear elemento HTML
        const autoHTML = document.createElement('P')
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio $ ${precio} - Color: ${color}
        `

        // Insertar auto al resultado
        resultado.appendChild(autoHTML)
    })
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelectYear() {
    for (let i = max; i > min; i--) {

        // crear elemento html
        const option = document.createElement('OPTION')
        option.value = i
        option.textContent = i

        // insertar option al select year
        year.appendChild(option)
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
        .filter(filtrarMinimo).filter(filtrarMaximo)
        .filter(filtrarPuertas).filter(filtrarTransmision)
        .filter(filtrarColor)

    if (resultado.length) {
        mostrarAutos(resultado)
    } else {
        noResultados()
    }
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda

    if (marca) {
        return auto.marca === marca
    }
    return auto
}

function filtrarYear(auto) {
    const { year } = datosBusqueda

    if (year) {
        return auto.year === year
    }
    return auto
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda

    if (minimo) {
        return auto.precio >= minimo
    }
    return auto
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda

    if (maximo) {
        return auto.precio <= maximo
    }
    return auto
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda

    if (puertas) {
        return auto.puertas === puertas
    }

    return auto
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda

    if (transmision) {
        return auto.transmision === transmision
    }
    return auto
}

function filtrarColor(auto) {
    const { color } = datosBusqueda

    if (color) {
        return auto.color === color
    }
    return auto
}

function noResultados() {
    limpiarHTML()
    const noResultado = document.createElement('DIV')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay Resultados...'
    resultado.appendChild(noResultado)
}
