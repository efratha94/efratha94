
class TempManager {
    constructor() {
        this.cityData = []
    }

    getDataFromDB() {
        $.get('/cities', function (request, response) {
            if (response != []) {
                this.cityData = response
            }
        })
    }

    async getCityData(cityName) {
        try {
            let result = await $.get(`/city/${cityName}`)
            this.cityData.push({
                name: result.name,
                temperature: result.main.temp,
                condition: result.weather[0].main,
                conditionPic: `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`,
                sunrise: moment.unix(result.sys.sunrise).format("LT"),
                sunset: moment.unix(result.sys.sunset).format("LT")
            })
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
const tempManager = new TempManager()

async function callFunctions(){
    await tempManager.getCityData("London")
    await tempManager.getCityData("Oslo")
    await tempManager.saveCity("London")
    await tempManager.saveCity("Oslo")
    await tempManager.getCityData("Edinburgh")
    await tempManager.saveCity("Edinburgh")
    await tempManager.getCityData("Stockholm")
    await tempManager.saveCity("Stockholm")
    renderer.render(tempManager.cityData)
}
callFunctions()



