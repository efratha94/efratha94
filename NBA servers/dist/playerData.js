class PlayerData {
    constructor() {
        this.data = {}
    }
    loadData(myTeam) {
        $.get(`/teams/${myTeam}`,  team => {
            this.data.team = team
            console.log(team)
        })
    }
}





    //     $.ajax({
    //         url: "http://data.nba.net/10s/prod/v1/2018/players.json",
    //         method: "GET",
    //         dataType: "json",
    //         success: data => {
    //             let playerName = JSON.stringify(data.body)
    //             console.log(JSON.parse(playerName))
    //             this.data.something = playerName

    //         },
    //         error: function(xhr, text, error){
    //             console.log(xhr.responseText)
    //     }
    // })


