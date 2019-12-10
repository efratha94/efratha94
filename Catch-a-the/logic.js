const Frogs = function(){
    const frogs = []

    let frogsIdCounter = frogs.length

    const addFrogs = function(){
        frogsIdCounter++
        frogs.push({id:frogsIdCounter})
    }

    const removeFrogs = function(frogId){
        for (let frog of frogs){
            if (frogId === "A"+frog.id){
                // console.log(frogId)
                frogs.splice(frog, 1)
                return frogs
            }
        }
    }

    const getFrogs = function(){
        return frogs
    }

    return{
        addFrogs,
        removeFrogs,
        getFrogs,
    }
}