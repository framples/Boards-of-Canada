module.exports = function(sequelize, DataTypes) {
  var TaskType = sequelize.define(
    "Tasktype",
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  return TaskType;
};
