
class TempManager {
    constructor() {
        this.cityData = []
    }
    async getDataFromDB() {
        await $.get('/cities', function (request, response) {
            if (response != []) {
                tempManager.cityData = request
                return tempManager.cityData
            }
        })
    }

    async getCityData(cityName) {
        try {
            let result = await $.get(`/city/${cityName}`)
            let resultCity = {
                name: result.name,
                temperature: result.main.temp,
                condition: result.weather[0].main,
                conditionPic: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
                humidity: result.main.humidity,
                sunrise: moment.unix(result.sys.sunrise).format("LT"),
                sunset: moment.unix(result.sys.sunset).format("LT")
            }
            this.cityData.push(resultCity)
            return resultCity
        } catch (error) {
            console.log(error)
        }

    }
    async saveCity(cityName) {
        const cityToLookUp = this.cityData.find(c => c.name == cityName)
        let bla = await $.post(`/city`, cityToLookUp )
    }
   async removeCity(cityName){
        await $.ajax({
            url: `/city/${cityName}`,
            method: "DELETE",
            dataType: "JSON",
            success: function(request, response){
                console.log(response)
                console.log("City Deleted")
            }
        })
    }

}




