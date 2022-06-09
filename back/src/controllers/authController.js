const userDataAccess = require("../models/userDataAccess")
const { verifyPassword } = require("../helpers/argonHelper")
const { encodeJWT } = require("../helpers/jwtHelper")

exports.login = (req, res) => {
  const { email, password } = req.body

  userDataAccess.findByEmail(email).then((user) => {
    if (!user) {
      res.status(401).send("Invalid credentials")
    } else {
      verifyPassword(password, user.password).then((verification) => {
        if (verification) {
          delete user.password
          const token = encodeJWT(user)

          res.cookie("auth_token", token, { httpOnly: true, secure: false })

          res.status(200).json({ username: user.name })
        } else {
          res.status(401).send("Invalid credentials")
        }
      })
    }
  })
}

exports.logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200)
}
