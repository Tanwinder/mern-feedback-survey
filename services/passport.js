const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE_CLIENT_ID,
        clientSecret: keys.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        console.log("profile----------------",accessToken, "refreshToken", refreshToken, "profile--- ", profile, "done---", done);
        // done(null, profile);
      }
    )
);