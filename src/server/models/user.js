const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: Integer,
    required: true
  },
  googleId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  surveyResponse: Text,
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class'
    }
  ],
  access_token: String,
  refresh_token: String
});

var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;


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
