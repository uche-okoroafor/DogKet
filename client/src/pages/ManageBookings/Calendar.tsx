import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './useStyles';
import MultipleDatesPicker from '@randex/material-ui-multiple-dates-picker';
import Paper from '@material-ui/core/Paper';

export default function Calendar() {
  const classes = useStyles();

  return (
    <div className={'calendarWrapper'}>
      <Paper className={classes.paper}>
        <MultipleDatesPicker
          open={true}
          selectedDates={[]}
          onSubmit={(dates: any) => console.log('selected dates', dates)}
        />
      </Paper>
    </div>
  );
}
