const chalk = require('chalk')
const fs = require('fs')

const guardarNota = (notas) => {
    const dataJSON = JSON.stringify(notas)
    fs.writeFileSync('notes.json', dataJSON)
}

const cargarNotas = () => {
    try {
        const data = fs.readFileSync('notes.json')
        const dataString = data.toString()
        const dataJSON = JSON.parse(dataString)

        return dataJSON;
    } catch (error) {
        return []
    }
}

const obtenerNotas = () => {
    console.log(chalk.cyan.inverse.bold('Tus Notas...'))
    const notas = cargarNotas()
    notas.forEach(nota => {
        console.log('Titulo: ' + nota.title)
        console.log('Contenido: ' + nota.body)
        console.log(chalk.red('................'))
    });
}

const leerNotas = (titulo) => {
    const notas = cargarNotas()
    const notaDoble = notas.find((nota) => nota.title === titulo)

    if(notaDoble){
        console.log(chalk.magenta.bold('Titulo: ' + notaDoble.title))
        console.log('Contenido: ' + notaDoble.body)
    }else{
        console.log(chalk.red.bold('No se encontro la nota'))
    }
}

const agregarNotas = (title, body) => {
    const notas = cargarNotas()
    const notaDoble = notas.find((nota) => nota.title === title)
    debugger
    if(!notaDoble){
        notas.push({
            title: title,
            body: body
        })
        guardarNota(notas)
        console.log(chalk.green.inverse.bold('Nota Agregada'))
    }else{
        console.log(chalk.red.bold('Este titulo esta en uso'))
    }
}

const eliminarNota = (titulo) => {
    const notas = cargarNotas()
    const notasxTitulo = notas.filter((nota) => nota.title !== titulo)

    if(notas.length > notasxTitulo.length){
        console.log(chalk.green.inverse.bold('Se elimino la nota!'))
        guardarNota(notasxTitulo)
    }else{
        console.log(chalk.red.bold('No se encontro la nota!'))
    }
}

module.exports = {
    obtenerNotas: obtenerNotas,
    leerNotas: leerNotas,
    agregarNotas: agregarNotas,
    eliminarNota: eliminarNota,
}