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
    }
  }
  const config = {
    tableName: 'movies',
    timestamps: false
  }

  const Movie = sequelize.define(alias, columns, config);

  return Movie
}