const express = require('express')
const homeRouter = express.Router();
const homeController = require('../controllers/homeController');
const checkCookies = require('../middlewares/checkCookies');

homeRouter.get('/', checkCookies, homeController.getHomePage);

module.exports = homeRouter;