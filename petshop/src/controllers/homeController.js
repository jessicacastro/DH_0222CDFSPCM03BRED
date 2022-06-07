const bcrypt = require('bcrypt')
const getInfoDatabase = require("../utils/getInfoDatabase")

const homeController = {
  getHomePage: (req, res) => {
    return res.render('home')
  }
}

module.exports = homeController