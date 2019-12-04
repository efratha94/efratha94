const express = require('express')
const router = express.Router()
const request = require("request")

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

//this is the request i'm getting
router.get("/teams/:teamName", function (req, res) {
    let teamName = req.params.teamName
    let teamCorrectId = teamToIDs[teamName]
    let playerInfo = []

    //this is the request the server is sending, after getting the request
    request.get("http://data.nba.net/10s/prod/v1/2018/players.json", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let nbaFirstInfo = response.body
            let nbaFirstInfoParsed = JSON.parse(nbaFirstInfo)
            let myTeams = nbaFirstInfoParsed.league.standard
            let teamOfInterest = myTeams.filter(i => i.teamId === teamCorrectId && i.isActive === true)
            let teamOfReallyInterest = playerInfo.push(teamOfInterest.map(r => { return { "First Name": r.firstName, "Last Name": r.lastName, "Jersey": r.jersey, "Position": r.pos }}))
            res.send(playerInfo)  
        } 
    })

})

/// EJN part 2
router.put("/team", function(req, res){
    let newTeam = req.body
    let newTeamName = Object.keys(newTeam)
    let newTeamID = Object.values(newTeam)

    for (let i = 0; i<newTeamName.length; i++){
    teamToIDs[newTeamName[i]] = newTeamID[i]
    }
})

let dreamTeam = []
router.get("/dreamTeam", function(req, res){
    res.send(dreamTeam)
})

router.post("/roster", function(req, res){
   dreamTeam.push(req.body) 
   res.end()
})


module.exports = router