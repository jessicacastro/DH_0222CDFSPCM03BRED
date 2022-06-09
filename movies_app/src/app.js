const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

/** Usamos essa configuração para que as informações do formulário cheguem até o req.body */
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen('3001', () => console.log('Servidor rodando na porta 3001'));
