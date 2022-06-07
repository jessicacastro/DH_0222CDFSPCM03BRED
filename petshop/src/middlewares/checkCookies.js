const getInfoDatabase = require('../utils/getInfoDatabase')

const users = getInfoDatabase('users')

function checkCookies(req, res, next) {
  const username = req.cookies.user || req.session.username;

  if (Boolean(username)) {
    const userFound = users.find(user => user.username === username)
    req.user = userFound
  }

  return next()
}

module.exports = checkCookies