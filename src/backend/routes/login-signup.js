const express = require("express")
const bcrypt=require("bcrypt")
const User = require("../models/userSchema")
const route=express.Router();

route.post('/signup',async (req,res)=>{
    const {name,email,Pass}=await req.body
    const salt=await bcrypt.genSalt(10)
    const newPass=await bcrypt.hash(Pass,salt)
    User.findOne({email:email}).then(user=>{
            if(user){
                res.send(false)
            }
            else{
                User.create({
                    name:name,
                    email:email,
                    password:newPass
                })
                res.send(true)
            }
    })
        
})

route.get('/login',(req,res)=>{
        const {email,pass}=req.query
        User.findOne({email:email}).then(user=>{
            if(bcrypt.compare(pass,user.password)){     
                res.send(true)
            }else{
                res.send(false)
            }
        })
})

module.exports=route;