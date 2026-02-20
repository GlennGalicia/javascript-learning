const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
const meses2 = ['Agosto', 'Septiembre']
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']

//.concat
const res1 = meses.concat(meses2, meses3)
console.log(res1);

// spread operator
const res2 = [...meses, ...meses2, ...meses3]
console.log(res2);

