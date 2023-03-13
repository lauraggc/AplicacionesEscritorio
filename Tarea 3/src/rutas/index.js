const router = require('express').Router()
const rutasHobbies = require('./hobbies')
const rutasFamilia = require('./familia')
const rutasContacto = require('./contacto')
const auth = require('./../middlewares').auth

router.use('', auth)
router.use('/hobbies', rutasHobbies)
router.use('/familia', rutasFamilia)
router.use('/contacto', rutasContacto)

router.get('*', function(req, res) {   // para cuando ponen una ruta que no está declarada, siempre tiene que ir al final
    res.status(404).render('notFound', {})
})

module.exports = router