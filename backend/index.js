// Cria a função do express da dependência importada
const express = require('express');

// Cria a função app que é a execução da função express;
const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE --> principais métodos utilizados

// Tipos de parâmetros:
//  - Query params: request.query (Filtros, ordenação, paginação, ...)
//  - Route params:
//  - Body:

app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello OmniStack'} );
});

app.listen(3333);