//Como importar yargs
//Crenado un archivo para el yargs
const argv = require('yargs')
                        .option('b', {              //Es como un comando en consala el cual resive un valor y aqui lo estamos configurando
                            alias:'base',
                            type: 'number',
                            demandOption: true,
                            describe:'Es la base de la tabla de multiplicar'
                        })
                        .check((argv, options) => {  //Aqui le estamos agregando una opcion al comando para que no sea opcional
                            if(isNaN(argv.b)){
                                throw 'La base tiene que ser un numero';
                            }
                            return true;
                        })
                        .option('l', {              //creando otro comando para resivir un valor booleano
                            alias:'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla en consola'
                        })
                        .option('h',{
                            alias:'hasta',
                            type:'number',
                            default: 10,
                            describe: 'Longitud de la tabla'
                        })
                        .argv;
                        
module.exports = argv; //Lo importamo de seta manera por que es un objeto