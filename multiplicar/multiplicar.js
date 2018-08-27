const fs = require('fs'); //fs es propia de node
const color = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`=====Tabla de ${base}======`.yellow);
    console.log('========================'.green);


    for (let i = 1; i <= limite; i++) {

        console.log(`${base} X ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor digitado "${base}" no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} X ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/Tabla del ${base} al ${limite}`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`El archivo Tabla del ${base} al ${limite}.txt ha sido creado`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}