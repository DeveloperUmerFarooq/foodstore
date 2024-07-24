const express = require("express")
const bcrypt=require("bcrypt")
const User = require("../models/userSchema")
const jwt=require('jsonwebtoken')
const route=express.Router();
const jwtSecret="HelloFromFoodies"
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
        User.findOne({email:email}).then(async user=>{
            if(user){
                let cmp=await bcrypt.compare(pass,user.password)
                if(cmp){
                    const data={
                        userData:{
                            id:user.id
                        }
                    }
                    const tokken=jwt.sign(data,jwtSecret)
                    return res.json({success:true,authTokken:tokken})
                }
                else{
                    return res.json({success:false,message:"Incorrect Password"})
                }
            }else return res.json({success:false,message:"User not found"})
        })
})

module.exports=route;