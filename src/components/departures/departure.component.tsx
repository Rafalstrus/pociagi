import { Grid, Button } from '@material-ui/core'



export const DepartureButton = ({ data }: any) => {

    return (
        <Grid container direction={"row"}
        key={data.arrivalTime + " " + data.arrivalDay}
        >
            <Button
            onClick={()=>{
                (document.getElementById(data.arrivalDay+data.arrivalTime)!.style.display==="none"
                ||document.getElementById(data.arrivalDay+data.arrivalTime)!.style.display==="")?
                document.getElementById(data.arrivalDay+data.arrivalTime)!.style.display="block":
                document.getElementById(data.arrivalDay+data.arrivalTime)!.style.display="none"
            }}
            >
                <p>{data.arrivalDay}</p>
                <p>{data.arrivalTime}</p>
                <p>{data.departureTime}</p>
                <p>{data.derpartureDay}</p>
            </Button>
        </Grid>
    )
}