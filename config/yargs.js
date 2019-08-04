const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Describe una tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva terea pore hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiz el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.export = {
    argv
}