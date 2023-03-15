function cargarHome(req, res) {
    console.log('api works :)')

    res.send('cargarHome');
}

module.exports = function(app) {
    app.get('/', cargarHome )
}

