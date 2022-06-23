module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("livros", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_paginas: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano_lancamento: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      estoque: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("livros");
  },
};
