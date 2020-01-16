// Importa o express no projeto
const express = require('express');
// Importa o mongoose no projeto
const mongoose = require('mongoose');
// Importa o arquivo de rotas
const routes = require('./routes');

// Cria a função app que é a execução da função express
const app = express();

// Faz a conexão com a base mongo, o parâmetro é a string de conexão gerada pelo MongoDB
// 'mongodb://localhost:27017/omnistack' --> MongoDB local
mongoose.connect(
  'mongodb+srv://tiago:CLfV4uXP5bV1rD0e@cluster0-dbn8m.mongodb.net/omnistack?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Configura o express para entender json
app.use(express.json());

app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE --> principais métodos utilizados

// Tipos de parâmetros:
//  - Query params: request.query (Filtros, ordenação, paginação, ...)
//  - Route params: request.params (Identificar um recurso na alteração ou remoção)
//  - Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.listen(3333);
