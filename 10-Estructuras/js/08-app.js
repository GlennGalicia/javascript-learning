const autenticado = true

if (autenticado) {
    console.log('Usuario autenticado');
}

const puntaje = 301

// function declaration
function revisarPuntaje() {

    if (puntaje > 400) {
        console.log('Excelente puntaje')
        return
    }

    if (puntaje > 300) {
        console.log('Buen puntaje...excelente')
        return
    }
}

revisarPuntaje()
