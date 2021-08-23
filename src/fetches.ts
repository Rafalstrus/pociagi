export const getTrainData = async (day :any, startStation :string, destinationStation: string) => {
    var data ={}
        await fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(async (response) => {
            if (!response.ok) {
                console.clear()
                data = { "error": "404" }
            }
            else{
                data = await response.json()
            }
        })
    return await data
}

// day: "12/08/2021",
// trainData: {},
// startStation: "",
// destinationStation:""