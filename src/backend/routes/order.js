const express = require("express")
const route=express.Router();
const User = require("../models/userSchema")
const Order= require('../models/orderSchema')
route.post("/checkout",async (req,res)=>{
   let [email,data,total]= await [req.body.email,req.body.data,req.body.total]
   console.log(data)
    Order.findOne({email:email}).then(user=>{
        if(user){
            Order.findOneAndUpdate()
        }else{
            Order.create({
                email:email,
                data:[...data],
                total:total
            }
            )
        }
    })
})
module.exports=route