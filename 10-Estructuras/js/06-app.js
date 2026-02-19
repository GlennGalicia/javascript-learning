// Operador &&

const usuario = true
const puedePagar = false

if (usuario && puedePagar) {
    console.log('puede pagar');
} else if (!usuario) {
    console.log('Inicia sesion o crea una cuenta');
}
else if (!puedePagar) {
    console.log('No tienes ingresos');
}
else {
    console.log('no puede comprar');
}
