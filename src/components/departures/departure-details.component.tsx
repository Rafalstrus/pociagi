import { Box } from "@material-ui/core"

import { useSelector } from "react-redux"

export const DepartureDetails = ({ data }: any) => {
    const startStation = useSelector((state: any) => (state.startStation))
    const destinationStation = useSelector((state: any) => (state.destinationStation))

    return (
        <Box
            id={data.arrivalDay + data.arrivalTime}
            display={"none"}
            key={data.arrivalTime + " " + data.arrivalDay + "detail"}
        >
            <p>{"Departure:"+data.departureTime + " " + data.derpartureDay}</p>
            
            <Box
                border={"solid"}
            >
                {data.stations.map((data: any) => {
                    console.log(destinationStation, data)
                    console.log(destinationStation===data.name)
                    return(
                        <Box>
                        {(startStation === data.name) ?
                        <p style={{ color: "red" }}>{data.name +" "+data.arrivalTime} </p> :
                        (destinationStation === data.name) ?
                            <p style={{ color: "blue" }}>{data.name+" "+data.arrivalTime} </p> :
                            <p >{data.name+" "+data.arrivalTime} </p>}
                        </Box>
                    )
                })}
            </Box>
            <p>{"Arrival:" +data.arrivalTime + " " + data.arrivalDay}</p>
        </Box>
    )
}