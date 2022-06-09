module.exports = (sequelize, dataTypes) => {
  const alias = 'Movies';

  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    length: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    awards: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    release_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    genre_id: {
      type: dataTypes.INTEGER,
      allowNull: true
    }
  }

  const config = {
    tableName: 'movies',
    timestamps: false
  }

  const Movie = sequelize.define(alias, columns, config);

  Movie.associate = (models) => {
    Movie.belongsTo(models.Genres, { foreignKey: 'genre_id', as: 'genres' });
  }

  return Movie
}