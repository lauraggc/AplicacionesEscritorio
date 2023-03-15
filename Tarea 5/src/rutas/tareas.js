const express = require('express')
const router = express.Router()
const tareas = require('../controladores/tareas')


    /**
     * @swagger
     * /tareas: 
     *  post:
     *    description: crear nueva tarea
     *    parameters:
     *      - in: body
     *        name: titulo
     *        description: el titulo de la tarea
     *        required: true
     *        schema: 
     *          type: object
     *    responses:
     *      200:
     *        description: objeto de la tarea creada
     */
    router.post('/', express.json(), tareas.createTareas)

    /**
     * @swagger
     * /tareas/:id: 
     *  put:
     *    description: actualizar los parámetros de una tarea
     *    parameters:
     *      - in: id
     *        name: id
     *        description: el id de la tarea
     *        schema: 
     *          type: string
     *    responses:
     *      200:
     *        description: objeto de la tarea actualizada
     */
    router.put('/:id', express.json(), tareas.updateTarea)

   /**
     * @swagger
     * /tareas: 
     *  get:
     *    description: listar todas las tareas del usuario
     *    responses:
     *      200:
     *        description: listar las tareas
     */
    router.get('/', tareas.getTareas)

    /**
     * @swagger
     * /tareas/:id: 
     *  get:
     *    description: listar una tarea por el id
     *    parameters:
     *      - in: id
     *        name: id
     *        description: el id de la tarea
     *        schema: 
     *          type: string
     *    responses:
     *      200:
     *        description: listar una tarea mediante el id
     */
    router.get('/:id', tareas.getTareaId)

    /**
     * @swagger
     * /tareas/:id: 
     *  delete:
     *    description: eliminar una tarea
     *    parameters:
     *      - in: id
     *        name: id
     *        description: el id de la tarea
     *        schema: 
     *          type: string
     *    responses:
     *      200:
     *        description: eliminar una tarea mediante el id
     */
    router.delete('/:id', tareas.deleteTarea)

module.exports = router