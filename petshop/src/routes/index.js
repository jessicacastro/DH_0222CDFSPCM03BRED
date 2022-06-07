const express = require('express');
const loginRouter = require('./login');
const homeRouter = require('./home');
const petsRouter = require('./pets');

const routes = express.Router();


routes.use('/', loginRouter);
routes.use('/home', homeRouter);
routes.use('/pets', petsRouter);

module.exports = routes;