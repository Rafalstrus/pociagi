import './train-selector.styles.css';

import { useState } from 'react';
import { connect } from "react-redux";

import DateFnsUtils from '@date-io/date-fns';
import { Button, TextField, Box, Grid } from '@material-ui/core/';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers/';
import { Autocomplete } from '@material-ui/lab/';

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';

import { cities } from '../../cities names/cities'

function TrainSelector() {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
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
        container direction={"row"}  justifyContent="center" 
      >
        <Grid item xs={8} >
          <Autocomplete
            options={cities}
            getOptionLabel={(option: any) => option.name}
            renderInput={(params) =>
              <TextField {...params} label="Start Point" />}
          />
        </Grid>
        <Grid item xs={4} >
          <TextField
            id="time"
            label="departure"
            type="time"
            onChange={(data :any)=>{console.log(data.target.value)}}
            defaultValue="07:30"
            inputProps={{
              step: 300, // 5 min
            }}
          >
          </TextField>
        </Grid>
        <Grid item xs={10} >
            <Autocomplete
              options={cities}
              getOptionLabel={(option: any) => option.name}
              renderInput={(params) =>
                <TextField {...params} label="Destination" />}
            />
        </Grid>
      </Grid>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}

        />
      </MuiPickersUtilsProvider>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        onClick={() => {
        }}>Check
      </Button>
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSelector);
