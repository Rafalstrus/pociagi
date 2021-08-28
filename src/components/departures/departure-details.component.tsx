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
            <p>{data.arrivalTime + " " + data.arrivalDay}</p>
            <Box
                border={"solid"}
            >
                {data.stations.map((data: any) => {
                    console.log(destinationStation, data.name)
                    console.log(destinationStation===data.name)
                    return(
                        (startStation === data.name) ?
                        <p style={{ color: "red" }}>{data.name} </p> :
                        (destinationStation === data.name) ?
                            <p style={{ color: "blue" }}>{data.name} </p> :
                            <p >{data.name} </p>
                    )
                })}
            </Box>
            <p>{data.departureTime + " " + data.derpartureDay}</p>
        </Box>
    )
}