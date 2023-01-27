const jwt = require('jsonwebtoken')
const user = require("../models/useschema")
const secret_key = "divyankaraideepakraisangeetaraii"

const authenticate= async = (req,res,next) => {
    try {
        const token = req.headers.Authorization
        console.log(token)
    } catch (error) {
        console.log(error)
    }
}

module.exports = authenticate