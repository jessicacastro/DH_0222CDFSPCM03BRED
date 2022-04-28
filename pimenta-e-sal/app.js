const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();

// Configuração do EJS no Express.
app.set('view engine', 'ejs');
//Definir a minha pasta de views para configurar no express.
app.set('views', path.join(__dirname, 'views'));

// Configurar para utilizar JSON no Express.
app.use(express.json());

//Configurar os meus arquivos estáticos.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// app.get('/', (req, res) => res.json({ mensagem: 'Aplicação funcionando' }));

app.listen(3000, () => console.log("Aplicação rodando em http://localhost:3000"));