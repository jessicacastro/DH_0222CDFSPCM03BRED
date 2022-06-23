const express = require('express');
const verifyIfUserIsLoggedIn = require('../middlewares/verifyIfUserIsLoggedIn');
const tasksController = require('../controllers/tasksController');
const tasksRouter = express.Router();

tasksRouter.use(verifyIfUserIsLoggedIn);
tasksRouter.get('/', tasksController.renderTasks);
tasksRouter.get('/filtered', tasksController.renderTasksFiltered);
tasksRouter.get('/add', tasksController.renderAddTasks);
tasksRouter.post('/add', tasksController.addTask);

module.exports = tasksRouter;