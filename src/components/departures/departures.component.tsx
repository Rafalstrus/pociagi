
import { useSelector } from 'react-redux'

import { Box } from '@material-ui/core'

import { DepartureButton } from './departure.component'
import { DepartureDetails } from './departure-details.component'

export const Departures = () => {
    const TrainData: any = useSelector((state: any) => (state.trainData))
    console.log(TrainData)
    return (
        <Box
            bgcolor="rgba(255, 255, 255, 0.96)"
            padding="25px"
            borderRadius="2vw"
            maxWidth="300px"
        >
            {TrainData.map((data: any) => (
                <Box>
                    <DepartureButton
                        data={data}
                    />
                    <DepartureDetails
                        data={data}
                    />
                </Box>
            ))}
        </Box>
    )
}