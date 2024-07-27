const express = require("express")
const mongoose= require("mongoose")
const cors=require("cors")
const {port} = require("./config.js")
const {Mongo}=require("./mongodb.js")

const loginRoute = require('./routes/login-signup.js')
const items=require('./routes/items.js')
const order=require('./routes/order.js')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/',loginRoute)
app.use('/',items)
app.use('/',order)

app.get('/',(req,res)=>{
    res.send("hehe")
})
app.listen(port,()=>{
    Mongo
    console.log("Server is listening at",port)
})
