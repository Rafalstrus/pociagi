
import {useSelector} from 'react-redux'

import { Box } from '@material-ui/core'

export const Departures = () => {
    const TrainData :any = useSelector((state :any) => (state.trainData))
    return (
        <Box
        bgcolor="rgba(255, 255, 255, 0.96)"
        padding="25px"
        borderRadius="2vw"
        maxWidth="300px"
      >
          </Box>
    )
}