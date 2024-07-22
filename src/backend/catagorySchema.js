const mongoose = require('mongoose')
const catagorySchema= new mongoose.Schema({
    CategoryName:String
})

const Catagory=mongoose.model("Catagory",catagorySchema)
module.exports=Catagory