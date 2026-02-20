window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()

    if (ubicacion.top < 700) {
        console.log('Elemento visible');
    } else {
        console.log('Aún no, da más scroll');
    }
})
