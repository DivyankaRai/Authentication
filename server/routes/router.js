const express = require('express')
const router = new express.Router()
const common = require("../controller/userController")
const authenticate = require("../middleware/authenticate")


router.post("/register", common.registerApi)
router.post("/login", common.loginApi)
router.get("/validUser",authenticate, common.getApi)
// router.get("/validuser",authenticate,async(req,res)=>{
//     console.log("done")
// })

module.exports = router