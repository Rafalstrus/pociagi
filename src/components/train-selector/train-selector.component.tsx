import './train-selector.styles.css';

import {useState} from 'react';
import { connect, useSelector } from "react-redux";
import DateFnsUtils from '@date-io/date-fns';
import { Button, TextField} from '@material-ui/core/';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers/';

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';

function TrainSelector() {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const handleDateChange = (date :any) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <p>Select Your Train</p>

      <TextField
        label="Train Name"
      >
      </TextField>
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

    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSelector);
