module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING
  })
   Task.associate = function (models) {
  }
   return Task
}