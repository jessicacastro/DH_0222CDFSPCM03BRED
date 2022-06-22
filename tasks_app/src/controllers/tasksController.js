const { Tasks, Users } = require('../database/models')

const tasksController = {
  renderTasks: (req, res) => {
    Tasks.findAll({
      include: {
        model: Users,
        attributes: ['name', 'id', 'type']
      },

    })
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(error => console.log(error));
  }
}

module.exports = tasksController;