const yargs = require('yargs');
const notes = require('./notas');

//Colocar la version de yargs
yargs.version('1.1.0')

//Crear comando agregar
yargs.command({
    command: 'agregar',
    describe: 'Agrega una nueva nota',
    builder: {
        title: {
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Contenido de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.agregarNotas(argv.title, argv.body)
})

//Crear comando eliminar
yargs.command({
    command: 'eliminar',
    describe: 'Elimina una nota',
    builder: {
        title: {
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.eliminarNota(argv.title)
})

//Crear comando leer
yargs.command({
    command: 'leer',
    describe: 'Leyendo una nota',
    handler: (argv) => notes.leerNotas(argv.title)
})

//Creando comando listar
yargs.command({
    command: 'listar',
    describe: 'Listar las notas',
    handler: () => notes.obtenerNotas()
})

yargs.parse()