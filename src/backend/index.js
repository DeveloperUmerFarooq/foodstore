const express = require("express")
const mongoose= require("mongoose")
const cors=require("cors")
const {port} = require("./config.js")
const {Mongo}=require("./mongodb.js")

const loginRoute = require('./routes/login-signup.js')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/',loginRoute)
app.use('/',(req,res)=>{
    res.send("hello from server")
})
app.listen(port,()=>{
    Mongo
    console.log("Server is listening at",port)
})
