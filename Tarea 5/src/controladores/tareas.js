const modelo = require('../modelos/tareas')

const tareasController = {
    getTareas: (req, res) => { // YA
        modelo.find()
            .then(response => {
                //console.log(response)
                res.send({tareas: response})
            })
            .catch(error => {
                res.status(400).send('algo salió mal en el listado de tareas')
            })
    },
    createTareas: (req, res) => { // YA
        let tarea = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: req.body.status,
            fecha_creacion: req.body.fecha_creacion
        }
        //console.log(tarea)
        modelo(tarea).save()
            .then(tarea =>{
                res.status(200).send(tarea)    
            })
            .catch(tarea =>{
                res.status(400).send('algo salió mal en la creación de la tarea')    
            })
    },
    updateTarea: (req, res) => { // YA
        let tarea = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: req.body.status,
            fecha_creacion: req.body.fecha_creacion
        }

        modelo.findByIdAndUpdate(req.params.id, tarea)
            .then(tareaToUpdate =>{
                res.status(200).send(tareaToUpdate)    
            })
            .catch(tareaToUpdate =>{
                res.status(400).send('algo salió mal en actualizar la tarea ', req.params.id)    
            })
    },
    getTareaId: (req, res) => { // YA
        //console.log(req.params.id)
        modelo.findById(req.params.id)
            .then(tareaById =>{
                res.status(200).send(tareaById)    
            })
            .catch(tareaById =>{
                res.status(400).send('algo salió mal en mostrar la tarea ', req.params.id)    
            })
    },
    deleteTarea: (req, res) => { // YA
        modelo.findByIdAndDelete(req.params.id)
            .then(tareaToDelete =>{
                res.status(200).send(tareaToDelete)    
            })
            .catch(tareaToDelete =>{
                res.status(400).send('algo salió mal en eliminar la tarea ', req.params.id)    
            })
    }
}

module.exports = tareasController