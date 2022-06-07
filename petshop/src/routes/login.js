const express = require('express')
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');
const checkCookies = require('../middlewares/checkCookies');

loginRouter.get('/', checkCookies, loginController.getLoginPage);
loginRouter.post('/login', loginController.postLogin);

module.exports = loginRouter;