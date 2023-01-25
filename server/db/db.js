const mongoose = require('mongoose')
mongoose.set({strictQuery:false})

mongoose.connect("mongodb://localhost:27017/authentication",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("db connected")).catch((er)=>console.log(er)    )