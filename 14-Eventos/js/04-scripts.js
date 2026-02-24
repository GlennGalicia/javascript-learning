document.querySelector('#formulario').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.action);
})
