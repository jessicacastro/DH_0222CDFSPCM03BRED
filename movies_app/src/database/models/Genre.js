module.exports = (sequelize, dataTypes) => {
  const alias = 'Genres';
  const columns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    ranking: {
      type: dataTypes.INTEGER,
      allowNull: false,
    }
  }
  const config = {
    tableName: 'genres',
    timestamps: false
  }

  const Genre = sequelize.define(alias, columns, config);

  Genre.associate = (models) => {
    Genre.hasMany(models.Movies, { foreignKey: 'genre_id', as: 'movies' });
  }

  return Genre
}