const express = require('express')
const petsRouter = express.Router();
const petsController = require('../controllers/petsController');
const checkCookies = require('../middlewares/checkCookies');

petsRouter.get('/', checkCookies, petsController.getPetsPage);

module.exports = petsRouter;