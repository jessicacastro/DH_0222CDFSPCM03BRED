const express = require('express');
const tasksController = require('../controllers/tasksController');
const tasksRouter = express.Router();

tasksRouter.get('/', tasksController.renderTasks);

module.exports = tasksRouter;