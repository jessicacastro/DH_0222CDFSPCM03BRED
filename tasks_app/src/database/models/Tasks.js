module.exports = (sequelize, dataTypes) => {
  const alias = "Tasks";

  const collumns = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false
    },
    status: {
      type: dataTypes.ENUM,
      values: ["todo", "in-progress", "done"],
      allowNull: false,
      defaultValue: "todo"
    },
    user_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  }

  const config = {
    tableName: "tasks",
    timestamps: false
  }

  const Tasks = sequelize.define(alias, collumns, config);

  Tasks.associate = (models) => {
    // Pertence a um único usuário
    Tasks.belongsTo(models.Users, {
      foreignKey: "user_id"
    });

    // Pertencer a vários usuários
    // Tasks.belongsToMany(models.Users, {
    //   as: "users",
    //   // Tasks pertence a vários usuários e joga pra tabela user_tasks
    //   // Tabela pivô com a relação de qual usuário tem qual task e qual task tem qual usuário
    //   // Controla a relação entre as tabelas: usuário e tarefas
    //   through: "user_tasks",
    //   foreignKey: "task_id"
    // });
  }

  return Tasks;
}