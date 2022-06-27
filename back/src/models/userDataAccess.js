const db = require("./db")

exports.findOne = (userId) => {
  return db
    .promise()
    .query("SELECT * FROM `user` WHERE ID = ?", [userId])
    .then(([result]) => result)
}

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `user`")
    .then((result) => result[0])
}

exports.addOne = (user) => {
  const { name, email, hash, auth_strategy } = user

  return db
    .promise()
    .query(
      "INSERT INTO `user` (name, email, password, auth_strategy) VALUES (?, ?, ?, ?)",
      [name, email, hash, auth_strategy]
    )
    .then(([result]) => {
      return { id: result.insertId, email }
    })
}

exports.findByEmail = (email) => {
  return db
    .promise()
    .query("SELECT id, name, email, password from `user` WHERE email = ?", [
      email,
    ])
    .then(([result]) => result[0])
}
