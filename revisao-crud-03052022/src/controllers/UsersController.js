const getInfoDatabase = require('../utils/getInfoDatabase')

const users = getInfoDatabase("users");

const UsersController = {
  showCreateUserPage: (req, res) => {
    res.render('login')
  },

  login: (req, res) => {
    const { email, password, remember } = req.body;
    const toRemember = Boolean(remember)
  
    const userExists = users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (!userExists) return res.send('E-mail ou senha está incorreta');

    req.session.user = userExists

    if (toRemember) {
      res.cookie('remember', userExists.email, { maxAge: 1000000 })
    }

    return res.redirect("products");
  },
}

module.exports = UsersController