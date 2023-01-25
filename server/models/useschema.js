const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("not valid Email")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    cpassword:{
        type:String,
        required:true,
        minlength:6,
    },
    tokens:[
        {
            tokens:{
                type:String,
                required:true,
            }
        }
    ]
})

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password,8)
    this.cpassword = await bcrypt.hash(this.cpassword,8)

    next()
})
const user = new mongoose.model("users",userSchema)
module.exports = user