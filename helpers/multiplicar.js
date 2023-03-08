const fs = require('node:fs');
const color = require('colors');


const crearArchivo = async (base = 5, l ,h) => {


    //Como una promesa
    // return new Promise((resolve, reject) => {

    //     let salida = '';

    //     for(let i = 1; i<=10; i++){
    //         salida += `${base} x ${i} = ${base * i}\n`;
    //     }
    
    //     console.log(salida);
        
    //     fs.writeFile(`tabla-${base}.txt`, salida, (err) => {

    //         if(err){
    //             reject(err);
    //         }else{
    //             resolve(`tabla-${base}.txt`);
    //         }
    //     });
    // });
    // console.log(`tabla-${base}.txt creada`); 

    //Async await
    let salida = '';
    let consola = '';

    for(let i = 1; i<=h; i++){
        salida += `${color.red(base)} ${color.green('x')} ${color.red(i)} ${color.green('=')} ${color.red(base * i)}\n`;
        consola += `${base} x ${i} = ${base * i}\n`;
    }

    if(l){
        console.log(salida);
    }

    //This isn't async
    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

    return `tabla-${base}.txt`;
}

//Exportando la funcion
module.exports = {
    crearArchivo: crearArchivo
}