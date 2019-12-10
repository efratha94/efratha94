
const Renderer = function () {
    const renderNewFrogs = function (frogs) {
        // $("#container").empty()
        const randomNumUpTo30 = Math.floor(Math.random() * 31) + 1
        let newFrog = (`<i class='fas fa-frog fa-3x' id=A${frogs.length} style=grid-area:f${randomNumUpTo30}></i>`)
        $("#container").append(newFrog)
    }
    const renderOldFrogs = function(id){
        console.log(id)
        let frogRemoved = document.getElementById(`${id}`)
        $(`#${id}`).remove()
    }

    return {
        renderNewFrogs,
        renderOldFrogs
    }
}
