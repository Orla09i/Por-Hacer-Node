const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}
const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: 'true',
        desc: 'Marca como copletado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado de completado de una tarea', opts2)
    .command('borrar', 'Borrar tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}