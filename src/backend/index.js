const express = require("express")
const mongoose= require("mongoose")
const {port,URL} = require("./config.js")
const cors=require("cors")
const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect(URL).
then(()=>{
    console.log("database connected")
    app.listen(port,()=>{
        console.log(`server is listening at port:${port}`)
    })
})
.catch((error)=>{
    console.log(`connection Failed due to${error} `);
})
