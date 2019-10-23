module.exports = function(sequelize, DataTypes) {
  var Tasktype = sequelize.define(
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
  return Tasktype;
};
