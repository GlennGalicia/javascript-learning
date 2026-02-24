function sumar(a, b) {
    return a + b
}

const resultado = sumar(10, 3)
console.log(resultado);

// ejemplo más avanzado
let total = 0

function agregarCarrito(precio) {
    return total += precio
}

function calcularImpuestos(total) {
    return total * 1.16
}

total = agregarCarrito(100)
total = agregarCarrito(500)
total = agregarCarrito(400)

totalPagar = calcularImpuestos(total)

console.log(`Total a pagar: ${totalPagar}`);
