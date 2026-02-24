const nav = document.querySelector('.navegacion')

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = 'aqua'
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent'
})
