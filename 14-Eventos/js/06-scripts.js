const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const title = document.querySelector('.titulo')

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en el card')
})
infoDiv.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en el info')
})
title.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('click en el titutlo')
})
