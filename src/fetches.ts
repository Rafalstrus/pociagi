export const getTrainData = async (day: any,
    startStation: string,
    destinationStation: string,
    departureTime: string) => {
        var data :any= {}
    if (startStation !== '' && destinationStation !== ""){
         data =
            [
                {
                    departureTime: "12:30",
                    arrivalTime: "15:20",
                    derpartureDay: "12/08/2021",
                    arrivalDay: "12/08/2021",
                    stations: [
                        { name: "kraków", arrivalTime: "10:15", arrivalDay: "12/08/2021" },
                        { name: "olsztyn", arrivalTime: "10:15", arrivalDay: "12/08/2021" },
                        { name: "gdańsk", arrivalTime: "10:15", arrivalDay: "12/08/2021" }
                    ]

                },
                {
                    departureTime: "12:30",
                    arrivalTime: "15:20",
                    derpartureDay: "12/08/2021",
                    arrivalDay: "12/08/2021",
                    stations: [
                        { name: "kraków", arrivalTime: "10:15", arrivalDay: "12/08/2021" },
                        { name: "olsztyn", arrivalTime: "10:15", arrivalDay: "12/08/2021" },
                        { name: "gdańsk", arrivalTime: "10:15", arrivalDay: "12/08/2021" }
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