const express = require('express');
const usersController = require('../controllers/usersController')

const userRouter = express.Router();

userRouter.get('/', usersController.index)
userRouter.get('/:id', usersController.getUser)


module.exports = userRouter