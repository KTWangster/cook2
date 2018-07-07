// dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var routes = require('./routes/index');
var users = require('./routes/users');

const port = process.env.PORT || 8080;

var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

// passport config
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// mongoose
let uri = "mongodb://heroku_dvxxfl9v:jk2njtfr9npm90brse4ijt57qc@ds123981.mlab.com:23981/heroku_dvxxfl9v";
mongoose.connect(uri);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// START SERVER
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
})


module.exports = app;


// require("dotenv").config();
// const express = require('express');
// const fs = require('fs');
// const mongoose = require('mongoose');
// const path = require('path');

// const config = require('../config/config');

// let uri = "mongodb://heroku_dvxxfl9v:jk2njtfr9npm90brse4ijt57qc@ds123981.mlab.com:23981/heroku_dvxxfl9v";
// const port = process.env.PORT || 8080;

// const ROOT = process.env.PORT ? "https://kjk-cooky.herokuapp.com/" : "http://localhost:8080";

// // Auth
// var passport = require("passport");
// var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// // Database
// var db = require("./models/Counter.js");


// // Configuration
// // ================================================================================================

// // Set up Mongoose
// mongoose.connect(uri);
// mongoose.Promise = global.Promise;

// const app = express();
// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json());

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: `${ROOT}/auth/google/callback`
//   },
//   function (accessToken, refreshToken, profile, done) {
//     console.log("ACCESS TOKEN");
//     console.log(accessToken);
//     console.log("REFRESH TOKEN");
//     console.log(refreshToken);
//     console.log(profile.name.givenName);
//     db.User.findOrCreate({
//       where: {
//         googleId: profile.id
//       },
//       defaults: {
//         googleId: profile.id,
//         display_name: profile.name.givenName,
//         access_token: accessToken,
//         refresh_token: refreshToken
//       }
//     }).spread((user, created) => {
//       console.log(user.get({
//         plain: true
//       }))
//       console.log(created);
//       return done(null, user);
//     });
//   }
// ));

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// app.use(require('express-session')({
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(express.static("public"));

// // require("./routes/api-routes.js")(app);
// // require("./routes/html-routes.js")(app);
// require('./routes')(app);

// // app.listen(port, '0.0.0.0', (err) => {
// //   if (err) {
// //     console.log(err);
// //   }

// //   console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
// // });

// // START SERVER
// db.sequelize.sync().then( function() {
//   app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
//   });
// })


// module.exports = app;