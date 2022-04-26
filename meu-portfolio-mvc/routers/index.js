const express = require('express');
const userRouter = require('./users');
const portfolioRouter = require('./portfolio')
const router = express.Router();

//Definindo nome de cada rota e utilizando a rota específica de cada um.
router.use('/users', userRouter)
router.use('/', portfolioRouter)

module.exports = router