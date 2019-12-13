
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
                temprature: result.main.temp,
                condition: result.weather[0].main,
                conditionPic: result.weather[0].icon

            })
            console.log(this.cityData)
        } catch (error) {
            console.log(error)
        }

    }

    saveCity(cityName) {
        console.log(this.cityData)
        const cityToLookUp = this.cityData.find(c => c.name == cityName)
        console.log(cityToLookUp)
        $.post(`/city`, {cityToLookUp}, function (response) {
            console.log(response)
        })

    }
    // saveCity(cityName){
    //     let savedCity = this.cityData.find( c => c.name == cityName )
    //     $.post(‘/city’, {savedCity} , function(response){
    //         console.log(response)
    //     })
    // }
}
const tempManager = new TempManager()

// tempManager.getDataFromDB()
// console.log(tempManager.cityData)
tempManager.getCityData("London")
tempManager.getCityData("Oslo")
// console.log(tempManager.cityData)
tempManager.saveCity("London")


