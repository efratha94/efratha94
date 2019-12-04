
let source = $("#players-container-template").html()
let template = Handlebars.compile(source)

const render = function (team) {
    console.log
    $("#players").empty()
    let newHTML = template({ team })
    $("#players").append(newHTML)
}

//a request the client is making to the server
const findMyTeam = function () {
    let myTeam = $("#team-name").val()
    $.get(`/teams/${myTeam}`, team => {
        render(team[0])
    })
}

//EJN part 2 - roster dreamTeam
const buildTeam = function(){
    $.get("/dreamTeam", team => {
        render(team)
    })
}

$("#players").on("click", "#new-dream-team", function(){
    let playerName = $(this).siblings("h2").text().split(" ")
    let playerFirstName = playerName[0]
    let playerLastName = playerName[1]
    let jerseyShirt = $(this).siblings(".player-shirt").text()
    let positionPlayer = $(this).siblings(".player-pos").text()
    let playerPic = $(this).siblings("img").attr("src")

    let dreamPlayer = {"First Name": playerFirstName, "Last Name": playerLastName, "Jersey": jerseyShirt, "Position": positionPlayer}
    $.post("/roster", dreamPlayer, function(reponse){
        buildTeam()
    })

})