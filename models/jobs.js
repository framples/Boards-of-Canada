module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define(
    "Jobs",
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      tasktype: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      job_desc: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      job_status: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  return Jobs;
};
