const dinero = 300
const totalPagar = 500
const tarjeta = true

if (dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si puedo pagar con tarjeta');
}
else {
    console.log('No podemos pagar');
}
