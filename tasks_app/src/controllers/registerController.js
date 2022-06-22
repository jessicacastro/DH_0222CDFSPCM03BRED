const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const registerController = {
  renderRegister: (req, res) => {
    res.render('register');
  },
  registerUser: (req, res) => {
    const { name, email, password } = req.body;

    const passwordHash = bcrypt.hashSync(password, 10);
    console.log(req.body)
    Users.create({
      name,
      email,
      password: passwordHash,
    }).then(() => {
      res.redirect('/login');
    }).catch(error => res.send(error))
  }
}

module.exports = registerController;