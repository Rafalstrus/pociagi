import { Box, Button } from '@material-ui/core'

import { DepartureButton } from './departure.component'
import { DepartureDetails } from './departure-details.component'

import { connect, useSelector } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';

const Departures = ({changeTrainData} :any) => {
    const TrainData: any = useSelector((state: any) => (state.trainData))
    console.log(TrainData)
    return (
        <Box
            bgcolor="rgba(255, 255, 255, 0.96)"
            padding="25px"
            borderRadius="2vw"
            maxWidth="300px"
        >
            <p>{ }</p>
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
            <Button
                variant={"contained"}
                onClick={() => {
                    changeTrainData({})
                }} >Cancel</Button>
        </Box>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Departures)