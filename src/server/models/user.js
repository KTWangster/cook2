const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema({
  display_name: String,
  username: String,
  password: String,
  googleId: String,
  email: String,
  location: String,
  surveyResponse: Text,
  classes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }],
  access_token: String,
  refresh_token: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', User);


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     googleId: DataTypes.STRING,
//     display_name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     surveyResponse: DataTypes.TEXT,
//     productsPurchased: DataTypes.STRING,
//     access_token: DataTypes.STRING,
//     refresh_token: DataTypes.STRING
//   }, {});
//   User.associate = function (models) {
//     // associations can be defined here
//     User.hasMany(models.Class, {
//       onDelete: "cascade"
//     });
//   };
//   return User;
// };