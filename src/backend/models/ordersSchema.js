const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    order:{
        type:Array,
        required:true
    },
    total:{
        type:Array,
        required:true
    },
    Date:{
        type:[Date],
        default:[Date.now()]
    }
})
const Order = mongoose.model("Orders", orderSchema)
module.exports = Order