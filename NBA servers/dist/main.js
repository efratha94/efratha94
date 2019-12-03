// import { platform } from "os"

// let render = new Renderer()
// let playerData = new PlayerData()

const render = function(team){
    let source = $("#players-container-template").html()
    let template = Handlebars.compile(source)
    let newHTML = template({team})
    $("#players").append(newHTML)
}

const findMyTeam = function () {
    let myTeam = $("#team-name").val()
    $.get(`/teams/${myTeam}`, team => {

        render(team[0])
    })
    
}

