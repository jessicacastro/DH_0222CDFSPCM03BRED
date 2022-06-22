const express = require('express');
const loginController = require('../controllers/loginController');
const loginRouter = express.Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginController.loginUser);

module.exports = loginRouter;