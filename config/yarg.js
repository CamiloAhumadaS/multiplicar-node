const opts = {
    base: {
        demmand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime una lista de la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv,
}