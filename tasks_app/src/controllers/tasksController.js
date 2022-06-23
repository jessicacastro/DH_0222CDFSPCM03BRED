const { Tasks, Users } = require('../database/models')

const tasksController = {
  renderTasks: (req, res) => {
    const user = req.user;

    Tasks.findAll({
      include: {
        model: Users,
        attributes: ['name', 'id', 'type']
      },
      where: {
        user_id: user.id
      }
    })
      .then(tasks => {
        res.render('tasks', { tasks, user, filter: 'all' })
      })
      .catch(error => console.log(error));
  },
  renderTasksFiltered: (req, res) => {
    const user = req.user;
    const { filter } = req.query;

    if (filter === 'all') {
      return res.redirect('/tasks');
    }

    Tasks.findAll({
      include: {
        model: Users,
        attributes: ['name', 'id', 'type']
      },
      where: {
        status: filter,
        user_id: user.id
      }
    }).then(tasks => {
      res.render('tasks', { tasks, user, filter })
    })
      .catch(error => console.log(error));
  },
  renderAddTasks: (req, res) => {
    const user = req.user;

    res.render('tasks-add', { user })
  },
  addTask: (req, res) => {
    const { title, description } = req.body;
    const { id: user_id } = req.user;

    Tasks.create({
      title,
      description,
      user_id
    }).then(response => {
      res.redirect('/tasks');
    }).catch(error => console.log(error));

  }
}

module.exports = tasksController;