
class Renderer {
    _renderName(firstName, lastName){
        let source = $("#players-container-template").html()
        let template = Handlebars.compile(source)
        let newHTML = template(`${myTeam}`)
    }
}