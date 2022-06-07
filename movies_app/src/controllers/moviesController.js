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
        rating: {[database.Sequelize.Op.gte]: 8},
        title: {[database.Sequelize.Op.like]: '%La%'}
      },
      order:[
        ['rating', 'DESC']
      ],
      offset: 2
    }
    
    database.Movies.findAll(configFindAll).then(movies => {
      res.render('recommendedMovies', { movies })
    })
  }
}

module.exports = moviesController;