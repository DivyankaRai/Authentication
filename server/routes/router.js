const express = require('express')
const router = new express.Router()
const common = require("../controller/userController")
const authenticate = require("../middleware/authenticate")


router.post("/register", common.registerApi)
router.post("/login", common.loginApi)
router.get("/validUser",authenticate, common.getApi)
router.get("/logout",authenticate, common.logoutApi)

module.exports = router