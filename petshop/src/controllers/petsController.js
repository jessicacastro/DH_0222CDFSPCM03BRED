const bcrypt = require('bcrypt')
const getInfoDatabase = require("../utils/getInfoDatabase")

const petsController = {
  getPetsPage: (req, res) => {
    return res.render('pets')
  }
}

module.exports = petsController