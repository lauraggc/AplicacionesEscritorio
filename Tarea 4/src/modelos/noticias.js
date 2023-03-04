const axios = require('axios');

const Noticia = {
    buscar: (filtros) => {
        let noticias={}
        let url = 'https://newsapi.org/v2/everything?' +'q=' + filtros + '&' +'apiKey=90d9e37ccc474513aa8ba285eb15b21c'
        axios.get(url)
                .then(response => {
                    noticias = response.data
                    //console.log(noticias.articles);
                })
                .catch(error => {
                    console.log(error)
                });

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(noticias)
            }, 1000)
        })
    }
}

module.exports = Noticia;