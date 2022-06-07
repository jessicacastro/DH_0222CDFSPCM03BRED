const bcrypt = require('bcrypt')
const getInfoDatabase = require("../utils/getInfoDatabase")

const loginController = {
  getLoginPage: (req, res) => {
    const user = req.user;

    if (user) {
      return res.redirect('/pets');
    }

    return res.render('login', { error: ''})
  },
  postLogin: (req, res) => {
    const { username, password, remember } = req.body
    const hasToRemember = !!remember;

    const usersBD = getInfoDatabase('users')
    
    const user = usersBD.find(user => user.username === username)
  
    if (!user) {
      return res.render('login', {
        error: 'Username or password incorrect.'
      })
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.render('login', {
        error: 'Username or password incorrect.'
      })
    }

    req.session.username = user.username;
    
    if (hasToRemember) {
      res.cookie('user', user.username, { maxAge: 5000 });
    }
    
    res.redirect('/home')
  }
}

module.exports = loginController