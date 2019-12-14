const tempManager = new TempManager()
const renderer = new Renderer()

const loadPage = async function(){
    let citiesFromDB = await tempManager.getDataFromDB()
    for (let i of tempManager.cityData){
        $("#cities-container").empty()
            renderer.render(tempManager.cityData)
    }
}

$(document).ready(loadPage())


const handleSearch = async function(){
    let requiredCity = $("#city-search").val()
    let requiredCityAchieved = await tempManager.getCityData(requiredCity)
    for (let i of tempManager.cityData){
        if (i.name === requiredCityAchieved.name){
            $("#cities-container").empty()
            renderer.render(tempManager.cityData)
        }
    }
    $("#city-search").val("")
}

$("#container").on("click", ".search",function(){
    handleSearch()
})

// async function callFunctions(){
    // await tempManager.getCityData("London")
    // await tempManager.getCityData("Oslo")
    // await tempManager.saveCity("London")
    // await tempManager.saveCity("Oslo")
    // await tempManager.getCityData("Edinburgh")
    // await tempManager.saveCity("Edinburgh")
    // await tempManager.getCityData("Stockholm")
    // await tempManager.saveCity("Stockholm")

    // await tempManager.getDataFromDB()   
    // await renderer.render(tempManager.cityData)
    
}
// callFunctions()


