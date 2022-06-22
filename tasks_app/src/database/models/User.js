module.exports = (sequelize, dataTypes) => {
  const alias = "Users";

  const collumns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false
    },
    type: {
      type: dataTypes.ENUM,
      values: ["user", "admin"],
      allowNull: false,
      defaultValue: "user"
    }
  }

  const config = {
    tableName: "users",
    timestamps: false,
  }

  const User = sequelize.define(alias, collumns, config);

  // Usuário pode ter diversas tarefas
  // Tarefa -> Só pertence a um usuário

  User.associate = ({ Tasks }) => {
    // Tem uma tarefa - Relação HasOne
    // User.hasOne(models.Tasks, {
    //   as: "tasks",
    // });

    // Tem várias tarefas - Relação HasMany
    User.hasMany(Tasks, {
      foreignKey: 'user_id'
    });
  }

  return User;
}