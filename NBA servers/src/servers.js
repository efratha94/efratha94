const express = require("express")
const app = express()
const path = require("path")
const request = require("request")
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "dist")))
app.use(express.static(path.join(__dirname,"..", 'node_modules')))


const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

app.get("/teams/:teamName", function (req, res) {
    let teamName = req.params.teamName
    let teamCorrectId = teamToIDs[teamName]
    let playerInfo = []

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




app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})