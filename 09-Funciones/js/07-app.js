iniciarApp()

function iniciarApp() {
    console.log('iniciando app...');
    segundaFuncion()
}

function segundaFuncion() {
    console.log('segunda función');
    usuarioAutenticado('Glenn')
}

function usuarioAutenticado(user) {
    console.log('Autenticando usuario...espere');
    console.log(`Autenticado exitosamente: ${user}`);
}
