const express = require('express');
const registerController = require('../controllers/registerController');
const registerRouter = express.Router();

registerRouter.get('/', registerController.renderRegister);
registerRouter.post('/', registerController.registerUser);

module.exports = registerRouter;