import 'date-fns';
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
