module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      surname: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      username: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        },
        unique: true
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    }, { 
      timestamps: false,
      freezeTableName: true,
      tableName: 'users' // nome da tabela
    }
  );

  return User;
}