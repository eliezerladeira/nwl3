// importa dependência (matter dependence)
const express = require('express');
const path = require ('path');

// iniciando o express (starting express)
const server = express();
server
    // utilizando os arquivos estáticos (using static files)
    .use(express.static('public'))

    // configurar template engine (set up template engine)
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // cria uma rota (create a route)
    server.get('/', (request, response) => {
        //return response.sendFile(path.join(__dirname, 'views', 'index.html'))
        return response.render('index')
    })

// sobe o servidor (go up the server)
server.listen(5500)