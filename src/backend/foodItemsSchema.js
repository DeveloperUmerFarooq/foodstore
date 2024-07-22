const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema({
    CategoryName: String,
        name: String,
        img: String,
        options: [
            {
                regular: Number,
                medium: Number,
                large: Number
            }
        ],
        description: String
})

const food_items=mongoose.model("food_items",foodSchema)

module.exports=food_items