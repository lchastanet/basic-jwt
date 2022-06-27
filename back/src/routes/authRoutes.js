const express = require("express")

const passport = require("../helpers/googleOauthHelper")

const authController = require("../controllers/authController")
const auth = require("../middlewares/auth")

const router = express.Router()

router.post("/login", authController.login)

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
)

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/auth/success",
    failureRedirect: "/api/auth/failure",
  })
)

router.get("/success", (req, res) => {
  res.redirect("http://localhost:3000/books")
})

router.get("/failure", (req, res) => {
  res.status(401).json({ message: "Unauthorized User" })
})

router.get("/logout", auth, authController.logout)

module.exports = router
