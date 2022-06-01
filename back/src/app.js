const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.json())

const router = express.Router()

const bookRoutes = require("./routes/bookRoutes")
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")

router.use("/book", bookRoutes)
router.use("/user", userRoutes)
router.use("/auth", authRoutes)

app.use("/api", router)

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
