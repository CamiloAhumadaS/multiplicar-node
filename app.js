//Al inicio se coloca todo lo que es requerido
//Recibimos lo que importamos con el modulo
const argv = require('./config/yarg').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const color = require('colors');



let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado :`, color.white(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


//et argv = process.argv; //argv capta los argumentos del arreglo

/*let parametro = argv[2]; //capta la posicion del arreglo
let base = parametro.split('=')[1] //capta la posicion despues del = */

//console.log('Limite:', argv.limite);

/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/