const {Schema, model} = require('mongoose')

const tareaSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, default: 'no description' },
    status: { type: String, default: 'new' },
    fecha_creacion: { type: String, default:'14/03/2023'}
})

module.exports = model('tareas', tareaSchema)