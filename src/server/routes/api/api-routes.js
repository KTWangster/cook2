require("dotenv").config();

var db = require("../../models");
var passport = require("passport");
const {
  google
} = require("googleapis");
var gAuth;
// var moment = require("moment");
const ROOT = process.env.PORT ? "https://kjk-cooky.herokuapp.com/" : "http://localhost:8080";
module.exports = function (app) {

  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['https://www.googleapis.com/auth/calendar', 'https://www.googleapis.com/auth/plus.login'],
      accessType: 'offline'
    }));

  app.get('/auth/google/callback', passport.authenticate('google', {
      failureRedirect: '/Register'
    }),
    function (req, res) {
      res.redirect('/');
      // window.location.assign('/About');
    }
  );

  app.get('/',
    require('connect-ensure-login').ensureLoggedIn(),
    function (req, res) {
      var accessToken, refreshToken;
      db.User.findOne({
        where: {
          googleId: req.user.googleId
        }
      }).then(dbUser => {
        accessToken = dbUser.access_token;
        refreshToken = dbUser.refresh_token;
        console.log("ACCESS FROM DB");
        console.log(accessToken);
        console.log("REFRESH FROM DB");
        console.log(refreshToken);

        const oauth2Client = new google.auth.OAuth2(
          process.env.GOOGLE_CLIENT_ID,
          process.env.GOOGLE_CLIENT_SECRET,
          `${ROOT}/auth/google/callback`
        );

        var tokens = {
          access_token: accessToken,
          refresh_token: refreshToken
        }

        oauth2Client.setCredentials(tokens);

        function getAuth() {
          var gAuth = oauth2Client;
          return gAuth;
        }
        gAuth = getAuth();
      });
    });

    app.get("/users", (req, res) => {
      db.User.find({})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.json(err));
    });

    app.post("/createUser", (req, res) => {
      db.User.create({
        display_name: req.body.display_name,
        username: req.body.username,
        password: req.body.password,
        location: req.body.location
      }).then(dbUser => res.json(dbUser));
    });
};