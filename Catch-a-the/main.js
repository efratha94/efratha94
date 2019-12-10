const frogs = Frogs()
const renderer = Renderer()
// renderer.renderNewFrogs(frogs.getFrogs())


$("#load-new-level").on("click", function () {
    frogs.addFrogs()
    renderer.renderNewFrogs(frogs.getFrogs())
})

$("#container").on("click", ".fa-3x", function(){
    let chosenFrog = $(this).attr("id")
    frogs.removeFrogs(chosenFrog)
    renderer.renderOldFrogs(chosenFrog)
})