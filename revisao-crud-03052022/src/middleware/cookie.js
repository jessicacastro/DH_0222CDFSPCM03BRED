const getInfoDatabase = require('../utils/getInfoDatabase')

const users = getInfoDatabase('users')

function cookie(req, res, next) {
  const cookies = req.cookies.remember;
  let userIsLoggedBySession = req.session.user

  if (Boolean(cookies) || Boolean(userIsLoggedBySession)) {
    const userFound = users.find(user => user.email === cookies)
    userIsLoggedBySession = userFound
    req.user = userIsLoggedBySession
  }

  return next()
}

module.exports = cookie