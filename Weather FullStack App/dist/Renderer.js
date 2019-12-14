class Renderer{

    _renderData(allCityData){
        const source = $("#new-city-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template({allCityData})
        $("#container").append(newHTML)
    }
    async render(allCityData){
        await this._renderData(allCityData)
        console.log(allCityData)
        
    }
}

const renderer = new Renderer()

async function rendering(){
    await renderer.render(tempManager.cityData)
    
}
rendering()