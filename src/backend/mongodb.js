const mongoose= require('mongoose')
const {URL} = require('./config')


const Mongo=mongoose.connect(URL).then(()=>console.log("db connected")).catch((err)=>console.log(`Connection failed dur to ${err}`))


module.exports=Mongo