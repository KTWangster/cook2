'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    googleId: DataTypes.STRING,
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    surveyResponse: DataTypes.TEXT,
    productsPurchased: DataTypes.STRING,
    access_token: DataTypes.STRING,
    refresh_token: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Class, {
      onDelete: "cascade"
    });
  };
  return User;
};
