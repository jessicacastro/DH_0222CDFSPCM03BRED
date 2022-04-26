const express = require('express');
const portfolioController = require('../controllers/portfolioController')

const portfolioRouter = express.Router();

portfolioRouter.get('/', portfolioController.index)
portfolioRouter.get('/about', portfolioController.about)

module.exports = portfolioRouter
