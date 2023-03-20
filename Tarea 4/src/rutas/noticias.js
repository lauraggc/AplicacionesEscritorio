const express = require('express')
const router = express.Router()
const noticias = require('../controladores/noticias')

//router.post('', noticias.createNoticias)

//router.put('/:id', noticias.updateNoticia)

router.get('', noticias.getNoticias)

//router.get('/:id', noticias.getNoticiaId)

module.exports = router