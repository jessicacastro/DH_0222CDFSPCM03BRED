const express = require('express')
const menuRouter = express.Router();
const menuController = require('../controllers/menuController');

menuRouter.get('/', menuController.getHomepage);
menuRouter.get('/detalhe/:id', menuController.getDetails);

module.exports = menuRouter;