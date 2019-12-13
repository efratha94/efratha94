// const request = require("request")

class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        const returnedCityData = await $.get("/cities")
        if (returnedCityData) {
            this.cityData.push(returnedCityData)

        }
    }
    async getCityData(cityName) {
        const cityFromAPI = await $.get(`/city/${cityName}`)
        this.cityData.push({
            name: cityFromAPI.name,
            temprature: cityFromAPI.main.temp,
            condition: cityFromAPI.weather[0].main,
            conditionPic: cityFromAPI.weather[0].icon
        })
        // console.log(tempManager.cityData)
    }

    saveCity(cityName) {
        console.log(this.cityData)
        const doesExist = this.cityData.find(c => c.name = cityName)
        console.log(doesExist)
        // $.post("/city")

        // this.cityData.find(c => c.name)
    }
}




