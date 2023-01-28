const jwt = require('jsonwebtoken')
const user = require("../models/useschema")
const secret_key = "divyankaraideepakraisangeetaraii"

const authenticate= async(req,res,next) => {
    try {
        const token = req.headers.authorization

        const verifytoken = jwt.verify(token,secret_key)

        const fuser = await user.findOne({_id:verifytoken._id})
        // console.log(fuser)
        if(!fuser){
            throw new Error("User not found")
        }

        req.token = token 
        req.rootUser = fuser 
        req.userId = fuser._id

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({status:401, message:"unauthorized user no token found"})
    }
}

module.exports = authenticate