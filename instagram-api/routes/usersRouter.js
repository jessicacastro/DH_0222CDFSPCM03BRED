const express = require("express");
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

usersRouter.get("/test", (req, res) => res.json({ mensagem: 'Módulo users funcionando!' }));

usersRouter.get('/', usersController.getUsers);
usersRouter.get('/:id', usersController.getUserById);
usersRouter.post('/', usersController.createUser);


module.exports = usersRouter;