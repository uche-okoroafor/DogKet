import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import MultipleDatesPicker from '@randex/material-ui-multiple-dates-picker';
import useStyles from './useStyles';

export default function Calendar() {
  const classes = useStyles();

  return (
    <div className={'calendarWrapper'}>
      <MultipleDatesPicker
        open={true}
        selectedDates={[]}
        onSubmit={(dates: any) => console.log('selected dates', dates)}
      />
    </div>
  );
}
