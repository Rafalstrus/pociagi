import './train-selector.styles.css';

import { useState } from 'react';
import { connect } from "react-redux";

import DateFnsUtils from '@date-io/date-fns';
import { Button, TextField, Box, Grid } from '@material-ui/core/';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers/';
import  Autocomplete  from '@material-ui/lab/Autocomplete';

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';

import { cities } from '../../cities names/cities'

function TrainSelector(
  { changeStartStation, changeDestinationStation, changeDepartureTime, changeDay }: any) {

  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const handleDayChange = (date: any) => {
    console.log(date.getDate())
    console.log(date.getMonth() + 1)
    console.log(date.getFullYear())
    setSelectedDate(date)
    //changeDay(date);
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
        onClick={() => {
          console.log("kukułka")
        }}>Check
      </Button>
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSelector);
