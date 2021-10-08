import 'date-fns';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import { Calendar } from 'react-multi-date-picker';
import { useState } from 'react';
import type { Value } from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/colors/red.css';

interface Props {
  currentBookings: any[];
}
export default function CalendarWrap({ currentBookings }: Props): JSX.Element {
  const classes = useStyles();
  const selectedDates = currentBookings.map((booking) => new Date(booking.startDate));
  const [value, setValue] = useState<Value>(selectedDates);

  return (
    <Box className={classes.calendarWrap}>
      <Calendar className="red" multiple value={value} onChange={setValue} />
    </Box>
  );
}
