const express = require("express")
const mongoose= require("mongoose")
const {port} = require("./config.js")
const {Mongo}=require("./mongodb.js")
const food_items = require('./foodItemsSchema.js')
const Catagory=require('./catagorySchema.js')
const User=require('./userSchema.js')
const cors=require("cors")
const app = express()
app.use(express.json())
app.use(cors())

food_items.findOne({}).then(res=>console.log(res.options[0].large)).catch(err=>console.log(err))
User.findOne({admin:true}).then(res=>console.log(res)).catch(err=>console.log(err))
food_items.find({CategoryName:"Pizza"}).then(res=>console.log(res)).catch(err=>console.log(err))
app.listen(port,()=>{
    Mongo
    console.log("Server is listening")
})
