const express = require('express')
const rutas = require('./rutas')
const routes = require('./src/rutas')

const { engine } = require('express-handlebars')

const app = express()   // mandas a llamar a exress
const port = 3000   // el puerto donde quieres que se escuche

// variables de configuración de mi aplicación
app.engine('handlebars', engine())
app.set('view engine', 'handlebars') // configura el valor de tu aplicación. le estás diciendo que es handlebars
app.set('views', './src/views') // decir dónde está la carpeta views con los archivos .handlebars

rutas(app)

app.use('', routes)
 
app.listen(port, function() {
    console.log('app is running in port ' + port)
})  // mandas a la app a que responda al puerto que declaramos