const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const moment = require("moment")

const citySchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String,
    sunrise: String,
    sunset: String
})


let City = mongoose.model("city", citySchema)

module.exports = City