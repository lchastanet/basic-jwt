const userDataAccess = require("../models/userDataAccess")
const { verifyPassword } = require("../helpers/argonHelper")

exports.login = (req, res) => {
  const { email, password } = req.body

  userDataAccess.findByEmail(email).then((user) => {
    if (!user) {
      res.status(401).send("Invalid credentials")
    } else {
      verifyPassword(password, user.password).then((verification) => {
        if (verification) {
          res.status(200).send(user.name)
        } else {
          res.status(401).send("Invalid credentials")
        }
      })
    }
  })
}
