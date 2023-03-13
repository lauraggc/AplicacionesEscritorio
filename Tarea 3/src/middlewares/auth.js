function middleware(req, res, next) {
    if(req.query.token === '123'){
        req.nombre = 'Laura'
        //console.log('autenticado')
        next();
    } else{
        //console.log("no autenticado")
        res.status(401).send('Token no autenticado')
    }
    //res.send('no pasas') // marca error porque se llama este send y ya se envía la respuesta, después en la función del next (cargarHome) intentas mandar otro send, y como ya mandaste una respuesta, no puedes mandar otra y te marca error.
    // no sabe cual es la función next, solo es una función que deja que pases, que continúes. entonces como la función cargarHome es la que estamos llamando después del middleware es la que se ejecuta ahora.
}

module.exports = middleware