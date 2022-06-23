const verifyIfUserIsLoggedIn = (req, res, next) => {
  if (!req.cookies.user) {
    return res.redirect('/login');
  }

  req.user = JSON.parse(req.cookies.user);
  next();

}

module.exports = verifyIfUserIsLoggedIn