const { Users } = require('../database/models');
const bcrypt = require('bcrypt');

const logoutController = {
  logout: (req, res) => {
    res.clearCookie('user');
    res.redirect('/login');
  }
}

module.exports = logoutController;