const request = require("request")

class TempManager{
    constructor(){
        this.cityData = []
    }
    async getDataFromDB(){
        const returnedCityData = await $.get("/cities")
        if (returnedCityData){
            this.cityData.push(returnedCityData)
        }
    }
    async getCityData(){
        const cityFromAPI = await $.get("/city/:cityName")
        const cityName = req.params.cityName
        if (cityFromAPI){
            console.log(cityFromAPI)
            // this.cityData.push({"City Name": cityName, "Temprature": })
        }
    }
}

const tempManager = new TempManager()
tempManager.getCityData()
module.exports = TempManager