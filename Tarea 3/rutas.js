const path = require('path')
const express = require('express')
const { auth } = require('./src/middlewares')

function cargarHome(req, res) {
    console.log('api works :)')
    // const ruta = path.join(__dirname, 'src', 'views', 'index.html')
    // res.sendFile(ruta) // te da la carpeta donde está index.html. es una variable que te da node
    res.render('home', {name: 'Laura González'})
}

module.exports = function(app) {

    app.use('/assets', express.static(path.join(__dirname, 'assets')))

    app.get('/', auth, cargarHome ) // el middleware es un medio para que se llegue al endpoint, que en este caso es la función cargarHome
}

