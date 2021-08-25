import './train-selector.styles.css';

import { useState, useEffect } from 'react';
import { connect, useSelector } from "react-redux";

import DateFnsUtils from '@date-io/date-fns';
import { Button, TextField, Box, Grid } from '@material-ui/core/';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers/';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';

import { getTrainData } from '../../fetches'

import { cities } from '../../cities names/cities'

function TrainSelector(
  { changeStartStation, changeDestinationStation, changeDepartureTime, changeDay,changeTrainData}: any) {

  const [selectedDate, setSelectedDate] = useState<any>(new Date());


  const day = useSelector((state: any) => (state.day))
  const departureTime = useSelector((state: any) => (state.departureTime))
  const startStation = useSelector((state: any) => (state.startStation))
  const destinationStation = useSelector((state: any) => (state.destinationStation))

  useEffect(() => {
    let date = new Date()
    let day = (date.getDate() > 10) ? date.getDate() : '0' + date.getDate()
    let month = (date.getMonth() + 1 > 10) ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    let year = date.getFullYear()
    changeDay(day + '/' + month + '/' + year)  // eslint-disable-next-line 
  }, [])

  const handleDayChange = (date: any) => {
    let day = (date.getDate() > 10) ? date.getDate() : '0' + date.getDate()
    let month = (date.getMonth() + 1 > 10) ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    let year = date.getFullYear()
    setSelectedDate(date)
    changeDay(day + '/' + month + '/' + year)
  };
  return (
    <Box
      bgcolor="rgba(255, 255, 255, 0.96)"
      padding="25px"
      borderRadius="2vw"
      maxWidth="300px"
    >
      <p
      >Select Your Train
      </p>
      <Grid
        container direction={"row"} justifyContent="center"
      >
        <Grid item xs={8} >
          {/* input with start station data */}
          <Autocomplete
            options={cities}
            onChange={(data, values) => {
              (values?.name !== undefined) ?
                changeStartStation(values?.name) : changeStartStation("")
            }}
            getOptionLabel={(option: any) => option.name}
            renderInput={(params) =>
              <TextField
                {...params}
                onChange={(data) => changeStartStation(data.target.value)}
                label="Start Point"

              />}
          />
        </Grid>
        <Grid item xs={4} >
          {/* input with start time data*/}
          <TextField
            id="time"
            label="departure"
            type="time"
            onChange={(data) => { changeDepartureTime(data.target.value) }}
            defaultValue="07:30"
            inputProps={{
              step: 300, // 5 min
            }}
          >
          </TextField>
        </Grid>
        <Grid item xs={10} >
          {/* input with start destination data */}
          <Autocomplete
            onChange={(data, values) => {
              (values?.name !== undefined) ?
                changeDestinationStation(values?.name) : changeDestinationStation("")
            }}
            options={cities}
            getOptionLabel={(option: any) => option.name}
            renderInput={(params) =>
              <TextField
                {...params}
                onChange={(data) => changeDestinationStation(data.target.value)}
                label="Start Point"

              />}
          />
        </Grid>
      </Grid>
      {/* input with start date data */}
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDayChange}

        />
      </MuiPickersUtilsProvider>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        onClick={async () => {
          let data = await getTrainData(day,startStation,destinationStation,departureTime)
          changeTrainData(data)
        }}>Check
      </Button>
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSelector);
