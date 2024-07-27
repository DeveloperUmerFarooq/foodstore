const mongoose = require('mongoose')
const userSchema= new mongoose.Schema({
        name:String,
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        admin:{
            type:Boolean,
            default:false
        }  
})
const User=mongoose.model("Users",userSchema)
module.exports=User