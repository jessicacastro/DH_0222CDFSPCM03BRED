const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const router = require('./src/routes')

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './src', './public')));

/** Usamos essa configuração para que as informações do formulário cheguem até o req.body */
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(router);

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));