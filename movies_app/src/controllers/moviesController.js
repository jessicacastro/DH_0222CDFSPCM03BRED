const database = require('../database/models');

const moviesController = {
  list: (req, res) => {
    database.Movies.findAll().then(movies => {
      res.render('moviesList', { movies })
    })
  },
  detail: (req, res) => {
    const { id } = req.params;

    database.Movies.findByPk(id).then(movie => {
      res.render('moviesDetail', { movie })
    })
  },
  new: (req, res) => {
    const configFindAll = {
      order: [
        ['release_date', 'DESC']
      ],
      limit: 5
    }

    database.Movies.findAll(configFindAll).then(movies => {
      res.render('newestMovies', { movies })
    })
  },
  recommended: (req, res) => {
    const configFindAll = {
      where: {
        rating: { [database.Sequelize.Op.gte]: 8 },
        title: { [database.Sequelize.Op.like]: '%La%' }
      },
      order: [
        ['rating', 'DESC']
      ],
      offset: 2
    }

    database.Movies.findAll(configFindAll).then(movies => {
      res.render('recommendedMovies', { movies })
    })
  },
  withGenre: (req, res) => {
    const configureFindAll = {
      include: [{
        model: database.Genres,
        as: 'genres',
        attributes: ['name'],
        where: {
          name: 'Drama'
        }
      }],
      order: [
        ['release_date', 'DESC']
      ]
    }

    database.Movies.findAll(configureFindAll).then(movies => {
      // console.log(movies)
      res.render('login', { movies })
    })
  },
  add: (req, res) => {
    res.render('moviesAdd')
  },
  create: (req, res) => {
    const { title, rating, awards, release_date, length } = req.body;

    database.Movies.create({
      title,
      rating,
      awards,
      release_date,
      length
    })
      .then(() => {
        return res.redirect('/movies')
      })
      .catch(error => res.send(error))
  },
  edit: (req, res) => {
    const movieId = req.params.id;

    database.Movies.findByPk(movieId)
      .then(movie => {
        res.render('moviesEdit', { movie })
      })
      .catch(error => res.send(error))
  },
  update: (req, res) => {
    const movieId = req.params.id;
    const { title, rating, awards, release_date, length } = req.body

    database.Movies.update({
      title,
      rating,
      awards,
      release_date,
      length
    }, {
      where: { id: movieId }
    })
      .then(() => {
        return res.redirect('/movies')
      })
      .catch(error => res.send(error))

  }
}

module.exports = moviesController;