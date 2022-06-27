const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

const userDataAccess = require("../models/userDataAccess")

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, CALLBACK_URL } = process.env

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      const { name, email } = profile._json
      userDataAccess.findByEmail(email).then((user) => {
        if (!user) {
          userDataAccess.addOne({ name, email, auth_strategy: "google" })
        }
      })
      done(null, profile)
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

module.exports = passport
