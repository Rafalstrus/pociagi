export const getTrainData = async (day: any,
    startStation: string,
    destinationStation: string,
    departureTime: string) => {
        var data :any= {}
    if (startStation !== '' && destinationStation !== "" &&
    startStation!==destinationStation
    ){
         data =
            [
                {
                    departureTime: "13:30",
                    arrivalTime: "16:20",
                    derpartureDay: "12/08/2021",
                    arrivalDay: "12/08/2021",
                    stations: [
                        { name: "Kraków", arrivalTime: "11:15", arrivalDay: "12/08/2021" },
                        { name: "Olsztyn", arrivalTime: "12:15", arrivalDay: "12/08/2021" },
                        { name: "Gdańsk", arrivalTime: "13:15", arrivalDay: "12/08/2021" },
                        { name: "Warszawa", arrivalTime: "14:15", arrivalDay: "12/08/2021" }
                    ]

                },
                {
                    departureTime: "12:30",
                    arrivalTime: "15:20",
                    derpartureDay: "12/08/2021",
                    arrivalDay: "12/08/2021",
                    stations: [
                        { name: "Kraków", arrivalTime: "10:15", arrivalDay: "12/08/2021" },
                        { name: "Olsztyn", arrivalTime: "10:15", arrivalDay: "12/08/2021" },
                        { name: "Gdańsk", arrivalTime: "10:15", arrivalDay: "12/08/2021" },
                        { name: "Warszawa", arrivalTime: "12:15", arrivalDay: "12/08/2021" }
                    ]
                }
            ]
        }
    // await fetch('https://pokeapi.co/api/v2/pokemon/')
    // .then(async (response) => {
    //     if (!response.ok) {
    //         console.clear()
    //         data = { "error": "404" }
    //     }
    //     else{
    //         data = await response.json()
    //     }
    // })
    return await data
}

// day: "12/08/2021",
// trainData: {},
// startStation: "",
// destinationStation:""