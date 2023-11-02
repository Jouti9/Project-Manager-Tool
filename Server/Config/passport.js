const passport = require("passport");
const { User } = require("../Models/Users");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "pwd" },
    (email, pwd, done) => {
      User.findOne({ email, pwd })
        .then((data) => {
          if (!data) {
            done(null, false);
            return;
          }
          done(null, data);
        })
        .catch((err) => {
          console.log(err);
          done(null, false);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
