const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const loginController = {
  renderLogin: (req, res) => {
    res.render('login');
  },
  loginUser: (req, res) => {
    const { email, password } = req.body;

    Users.findOne({
      where: {
        email,
      },
    }).then(user => {

      if (!user) {
        alert('User does not exist');
        res.redirect('/login');
      }

      if (bcrypt.compareSync(password, user.password)) {
        res.cookie('user', JSON.stringify({ id: user.id, name: user.name, type: user.type }));

        res.redirect('/tasks');
      }

      res.render('/login');
    }).catch(error => console.log(error));
  }
}

module.exports = loginController;