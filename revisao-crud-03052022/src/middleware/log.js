const fs = require("fs");

function log(req, res, next) {
  fs.appendFileSync("log.txt", `A rota ${req.url} foi acessada.\n`);
  next();
}

module.exports = log;
