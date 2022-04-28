const express = require('express');
const menuRouter = require('./menu');
const routes = express.Router();

routes.use('/', menuRouter);

module.exports = routes;