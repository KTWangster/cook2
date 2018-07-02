require("dotenv").config();
const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;

const ROOT = process.env.PORT ? "https://quiet-wave-14314.herokuapp.com/" : "http://localhost:8080";

// Auth
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// Database
var db = require("./models/Counter.js");


// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db);
mongoose.Promise = global.Promise;

const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${ROOT}/auth/google/callback`
  },
  function (accessToken, refreshToken, profile, done) {
    console.log("ACCESS TOKEN");
    console.log(accessToken);
    console.log("REFRESH TOKEN");
    console.log(refreshToken);
    console.log(profile.name.givenName);
    db.User.findOrCreate({
      where: {
        googleId: profile.id
      },
      defaults: {
        googleId: profile.id,
        display_name: profile.name.givenName,
        access_token: accessToken,
        refresh_token: refreshToken
      }
    }).spread((user, created) => {
      console.log(user.get({
        plain: true
      }))
      console.log(created);
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);
require('./routes')(app);

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

// app.listen(port, '0.0.0.0', (err) => {
//   if (err) {
//     console.log(err);
//   }

//   console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
// });

// START SERVER
db.sequelize.sync().then( function() {
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
})


module.exports = app;
