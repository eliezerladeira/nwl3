// importa dependência (matter dependence)
const express = require('express');
const path = require ('path');

// iniciando o express (starting express)
const server = express();
server
// utilizando os arquivos estáticos (using static files)
.use(express.static('public'))

// cria uma rota (create a route)
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// sobe o servidor (go up the server)
server.listen(5500)