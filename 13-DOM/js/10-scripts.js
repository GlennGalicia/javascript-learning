const navegacion = document.querySelector('.navegacion')
const enlace = document.createElement('a')
enlace.textContent = 'Nuevo Enlace'
enlace.href = '/nuevo-enlace'

navegacion.appendChild(enlace)

// crear un card
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')

const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

const imagen = document.createElement('img')
imagen.src = 'img/hacer1.jpg'

const card = document.createElement('div')
card.classList.add('card')
card.appendChild(imagen)
card.appendChild(info)

const contenedorCards = document.querySelector('.contenedor-cards')
contenedorCards.appendChild(card)

console.log(card);
