function auth(req, res, next) {
  const userIslogged = Boolean(req.session.user) || Boolean(req.user)

  if(userIslogged) {
    return next();
  }

  return res.send('Você não está logado no sistema')
}

module.exports = auth;
