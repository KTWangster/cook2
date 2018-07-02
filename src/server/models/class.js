'use strict';
module.exports = (sequelize, DataTypes) => {
  var Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    time: DataTypes.INTEGER,
    location: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Class.associate = function (models) {
    // associations can be defined here
    Class.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Class;
};
