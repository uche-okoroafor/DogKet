import 'date-fns';
import useStyles from './useStyles';
import MultipleDatesPicker from '@randex/material-ui-multiple-dates-picker';
import Paper from '@material-ui/core/Paper';
import { Booking } from '../../interface/Requests';

interface Props {
  currentBookings: any[];
}
export default function Calendar({ currentBookings }: Props): JSX.Element {
  const classes = useStyles();
  const today = new Date();
  // const nextweek = new Date(new Date().getFullYear(), today.getMonth(), today.getDate() + 7);
  const selectedDates = currentBookings.map((booking) => new Date(booking.startDate));
  console.log(selectedDates);
  return (
    <div className={'calendarWrapper'}>
      <Paper className={classes.paper}>
        <MultipleDatesPicker
          readOnly={true}
          open={true}
          selectedDates={selectedDates}
          onChange={(dates: any) => console.log('selected dates', dates)}
        />
      </Paper>
    </div>
  );
}
