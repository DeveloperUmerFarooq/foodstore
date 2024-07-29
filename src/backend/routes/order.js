const express= require('express')
const Order = require('../models/ordersSchema')

const route=express.Router()
route.post("/checkout",async (req,res)=>{
   let [email,data,total]= await [req.body.email,req.body.data,req.body.total]
    Order.findOne({email:email}).then(user=>{
        if(user){
            Order.findOneAndUpdate({email:email},{$push:{order:data,Date:Date.now(),total:total}}).then(res.send(true))
        }else{
            Order.create({
                email:email,
                order:[data],
                total:[total]
            }
            ).then(res.send(true))
        }
    })
})
route.post("/order",(req,res)=>{
    let email=req.body.email
    Order.findOne({email:email}).then((order)=>{
        if(order){
            let data=order.order
            let date=order.Date
            let total=order.total
            res.send([data,date,total])
        }
        else{
            res.send(false)
        }
    })
})
module.exports=route