module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define(
    "Employee",
    {
      level: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  return Employee;
};
