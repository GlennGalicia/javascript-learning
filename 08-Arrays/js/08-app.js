const numeros = [10, 20, 30, 40]
const [primero, segundo, tercero] = numeros
const [, , , cuarto] = numeros
const [pri, ...resto] = numeros

console.log(primero);
console.log(cuarto);
console.log(resto);

