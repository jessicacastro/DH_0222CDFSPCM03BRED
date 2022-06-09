const database = require('../database/models');

const genresController = {
  list: (req, res) => {
    database.Genre.findAll().then(genres => {
      res.render('genresList', { genres })
    })
  },
  detail: (req, res) => {
    const { id } = req.params;

    database.Genre.findByPk(id).then(genre => {
      res.render('genresDetail', { genre })
    })
  }
}

module.exports = genresController;