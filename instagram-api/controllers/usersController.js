const { User } = require('../models');
const bcrypt = require('bcrypt');

const usersController = {
  createUser: async (req, res) => {
    const { name, surname, username, email, password } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (user) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const body = {
        name,
        surname,
        username,
        email,
        password: bcrypt.hashSync(password, 10)
      }

      const newUser = await User.create(body);

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'surname', 'username', 'email']
      });

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  },
  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: true, message: error.message });
    }
  }
}


module.exports = usersController;