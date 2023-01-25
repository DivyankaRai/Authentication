const user = require("../models/useschema")
const bcrypt = require('bcrypt')

exports.registerApi = async(req,res)=> {
    const {name,email,password,cpassword} = req.body 
    if(!name || !email || !password || !cpassword){
        res.status(402).json("fill all the values")
    }
    try {
        const peruser = await user.findOne({email:email})
        if(peruser){
            res.status(402).json("email already exists")
        }
        else if(password !== cpassword){
            res.status(402).json("password doesn't match")
        }
        else{
          const finalUser = new user({
            name,email,password,cpassword
          }) 
          await finalUser.save() 
          res.status(200).json({status:200,finalUser})
          console.log(finalUser)
        }
    } catch (error) {
        res.status(402).json(error)
    }
}

exports.loginApi = async(req,res)=>{
    const {email,password} = req.body
    try {
        const userValid = await user.findOne({email:email})

        if(userValid){

        // to compare login password with hashed password
            const isMatch = await bcrypt.compare(password,userValid.password)
            if(!isMatch){
                res.status(402).json("invalid details")
            }
            else{

            }
        }
    } catch (error) {
        res.status(402).json(error)
    } 
}