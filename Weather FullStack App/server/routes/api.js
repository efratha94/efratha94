const express = require("express")
const router = express()
const weatherAPIKey = "f2112d158fda29132b3be27bd3c4229c"
const request = require("request")
const mongoose = require("mongoose")

//requiring all the models here!

const json = {
    data: {}
}

//connecting to external API
router.get("/city/:cityName", function(req, res){
    const cityName = req.params.city
    request.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherAPIKey}`, function(error, response){
    res.send(JSON.parse(response.body))
    })
})

//connecting to DB - getting saved cities
router.get("/cities", async function(req, res){
    const cities = await City.find({})
    res.send(cities)
    // City.find({}, function(error, response){
    //     res.send(response)
    // })
})

//connecting to DB - saving a new city
router.post("/city", function(req, res){
    const newCity = new City(req.body)
    newCity.save()
    res.send(newCity)
})

//connecting to DB - deleting a city
router.delete("/city/:cityName", async function(req, res){
    const cityName = req.params.city
    await City.findOneAndDelete({name: cityName})
    res.end()
})

module.exports = router