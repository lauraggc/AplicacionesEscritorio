const express = require('express')
const router = express.Router()

router.get('', function(req, res) {
    res.render('hobbies', {})  // siempre se pasa un objeto
})

module.exports = router