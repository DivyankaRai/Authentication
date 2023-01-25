const express = require("express")
const cors = require('cors')
const cookieParser = require('cookie-parser')
require("./db/db")
const router = require("./routes/router")
const app = express() 
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(router)



app.listen(8080,()=>{
    console.log("server started at 8080")
})        