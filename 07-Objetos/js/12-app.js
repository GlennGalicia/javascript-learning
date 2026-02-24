function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = true
}

const producto1 = new Producto('tablet', 10000)
const producto2 = new Producto('macbook pro', 650000)

console.log(producto1);
console.log(producto2);
console.log(typeof producto1);

