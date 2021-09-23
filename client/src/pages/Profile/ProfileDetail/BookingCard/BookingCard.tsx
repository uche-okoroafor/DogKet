import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@mui/material/Box';
import { DateRange } from '@mui/lab/DateRangePicker';
import { FormikHelpers } from 'formik';
import BookingForm from './BookingForm/BookingForm';
import { Sitter } from '../sampleData';
import useStyles from './useStyles';

interface Props {
  sitter: Sitter;
}

const BookingCard = ({ sitter }: Props): JSX.Element => {
  const classes = useStyles();

  const [dateRange, setDateRange] = useState<DateRange<Date | null>>([null, null]);

  const handleSubmit = (
    { dateRange }: { dateRange: DateRange<Date> },
    { setSubmitting, resetForm }: FormikHelpers<{ dateRange: DateRange<Date> }>,
  ) => {
    console.log(dateRange);
    setSubmitting(false);
    setDateRange([null, null]);
    resetForm({ values: { dateRange: [null, null] } });
  };

  return (
    <Grid item xs={12} sm={5} md={4} lg={4} xl={3} className={classes.root}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.bookingBox}
      >
        <Paper elevation={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.bookingContainer}
          >
            <BookingForm sitter={sitter} dateRange={dateRange} setDateRange={setDateRange} onSubmit={handleSubmit} />
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default BookingCard;
