module.exports = (sequelize, dataTypes) => {
  const Livro = sequelize.define(
    "Livro",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      quantidade_paginas: {
        allowNull: false,
        type: dataTypes.INTEGER,
      },
      autor: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        allowNull: false,
        type: dataTypes.INTEGER,
      },
      estoque: {
        allowNull: false,
        type: dataTypes.INTEGER,
      },
    },
    {
      tableName: "livros",
      timestamps: false
    }
  );

  return Livro;
};
