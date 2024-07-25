const express = require('express')
const Items=require('../models/foodItemsSchema')
const catagory=require('../models/catagorySchema')
const route=express.Router()

route.get('/items',async (req,res)=>{
   const Catagory=await catagory.find({})
   const food=await Items.find({})
    res.send([Catagory,food])
})

module.exports=route;