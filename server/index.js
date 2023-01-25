const express = require("express")
const cors = require('cors')
require("./db/db")
const router = require("./routes/router")
const app = express() 
app.use(express.json())
app.use(cors())
app.use(router)



app.listen(8080,()=>{
    console.log("server started at 8080")
})        