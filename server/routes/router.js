const express = require('express')
const router = new express.Router()
const common = require("../controller/userController")


router.post("/register", common.registerApi)
router.post("/login", common.loginApi)

module.exports = router