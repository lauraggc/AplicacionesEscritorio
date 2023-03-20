const router = require('express').Router()
const rutasNoticias = require('./noticias')

router.use('/noticias', rutasNoticias)

router.get('*', function(req, res) {   // para cuando ponen una ruta que no está declarada, siempre tiene que ir al final
    res.status(404).send('Pagina no encontrada')
})

module.exports = router