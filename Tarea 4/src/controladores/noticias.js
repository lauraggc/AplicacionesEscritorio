const modelo = require('../modelos/noticias')

const noticiasController = {
    getNoticias: function(req, res) {
        let noticias = []
        let filtros = req.query.q

        modelo.buscar(filtros)
            .then(response => {
                res.render('noticias', {noticias: response})
            })
            .catch(error => {
                res.status(400).send('algo salió mal al listar noticias')
            })
    }
}

module.exports = noticiasController