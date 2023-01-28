const user = require("../models/useschema")
const bcrypt = require('bcryptjs')

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
        console.log(error)
    }
}

exports.loginApi = async(req,res)=>{
    const {email,password} = req.body
    console.log(req.body)
    try {
        const userValid = await user.findOne({email:email})

        if(userValid){

        // to compare login password with hashed password
            const isMatch = await bcrypt.compare(password,userValid.password)
            if(!isMatch){
                res.status(422).json("invalid details")
            }
            else{
                //  to generate the token
                const token = await userValid.generateAuthtoken()

                // generate cookie 
                res.cookie("usercookie", token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
                })

                const result = {
                    userValid,
                    token
                }

                console.log(result)
                res.status(201).json({status:200,result})
            }
        }
    } catch (error) {
        res.status(402).json(error)
    } 
}

exports.getApi = async(req,res) =>{
    try {
        const validUser = await user.findOne({_id:req.userId})
        console.log(validUser)
        res.status(201).json({status:200,validUser})

    } catch (error) {

        res.status(401).json(error)
    }
}