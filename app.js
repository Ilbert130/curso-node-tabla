const {crearArchivo} = require('./helpers/multiplicar'); // Importando la funcion
const argv = require('./config/yargs'); //Importando yargs desde un archivo separado



console.clear(); //To clear the console

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);
//to enter information through console use 'process.argv'
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');
// console.log(base);
// const base = 7;

//Usando la funcion
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombre => console.log(nombre, 'creado'))
    .catch(err => console.log(err));

