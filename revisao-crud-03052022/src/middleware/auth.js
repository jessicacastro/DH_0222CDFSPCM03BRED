const getInfoDatabase = require("../utils/getInfoDatabase");

function auth(req, res, next) {
  const users = getInfoDatabase("users");
  const { email, password } = req.body;

  const userExists = users.find((user) => {
    return user.email === email && user.password === password;
  });

  if (!userExists) return res.redirect("/");

  res.redirect("products");
  next();
}

module.exports = auth;
