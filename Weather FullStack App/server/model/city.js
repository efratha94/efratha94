const mongoose = require("mongoose")
const Schema = mongoose.Schema

const citySchema = new Schema({
    name: String,
    temprature: Number,
    condition: String,
    conditionPic: String
})


let City = mongoose.model("city", citySchema)

module.exports = City