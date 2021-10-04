import { useState } from 'react';
import { Box, Typography, Button, Rating, TextField, CircularProgress, FormHelperText } from '@mui/material';
import { TimePicker, LocalizationProvider, MobileDateRangePicker } from '@mui/lab';
import { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangeIcon from '@mui/icons-material/DateRange';
import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import { Profile } from '../../../../interface/Profile';
import useStyles from './useStyles';

interface Props {
  values: any;
  touched: any;
  errors: any;
  setDateRange: any;
  dateRange: any;
  day: string;
  updateTime: any;
}

// const formSchema: { dateRange: DateRange<Date | null> } = { dateRange: [null, null] };

// const validationSchema = Yup.object().shape({
//   dateRange: Yup.array().of(Yup.date().typeError('Wrong Date Type').required('Required').nullable()),
// });

const BookingForm = ({ values, touched, errors, setDateRange, dateRange, day, updateTime }: Props): JSX.Element => {
  const classes = useStyles();

  const [inputDate, setInputDate] = useState([null, null]);

  // const mockRandomRating = Math.floor(1 + Math.random() * 5);

  // const handleSubmit = (
  //   { dateRange }: { dateRange: DateRange<Date> },
  //   { setSubmitting, resetForm }: FormikHelpers<{ dateRange: DateRange<Date> }>,
  // ) => {
  //   setSubmitting(false);
  //   setDateRange([null, null]);
  //   resetForm({ values: { dateRange: [null, null] } });
  // };

  // const handleChange = (newDateRange: DateRange<Date>) => {
  //   setDateRange(newDateRange);
  // };

  // const onValidate = (values: { dateRange: DateRange<Date | null> }) => {
  //   const errors: { dateRange?: string | null } = {};
  //   if (!values.dateRange || !values.dateRange[0] || !values.dateRange[1]) {
  //     errors.dateRange = 'Please choose Date and Time.';
  //   }
  //   return errors;
  // };

  console.log(dateRange[day]);
  return (
    <Box className={classes.formWrap}>
      <Box className={`${classes.m5} ${classes.timeLabel}`}>From</Box>
      <Box className={classes.m5}>
        <TimePicker
          inputFormat="hh aaa"
          value={dateRange[day][0]}
          views={['hours']}
          onChange={(newDateTime) => {
            console.log('a', newDateTime);
            values.dateRange[day][0] = newDateTime;
            const dataRangeCopy = dateRange;
            dataRangeCopy[day][0] = newDateTime;
            console.log('i', dateRange[day][0]);
            const inputDateCopy = inputDate;
            inputDateCopy[0] = newDateTime;
            // setInputDate(inputDateCopy);
            updateTime(newDateTime, day, 0);
            // setDateRange(dataRangeCopy);
            // return setDateRange((prevDateRange: DateRange<Date>) => [newDateTime, prevDateRange[1]]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.hourInput}
              placeholder="Choose Time"
              error={touched.dateRange && Boolean(errors.dateRange)}
            />
          )}
        />
      </Box>
      <Box className={`${classes.m5} ${classes.timeLabel}`}>To</Box>
      <Box>
        <TimePicker
          inputFormat="hh aaa"
          value={dateRange[day][1]}
          views={['hours']}
          onChange={(newDateTime) => {
            console.log('a', newDateTime);
            values.dateRange[day][1] = newDateTime;
            const dataRangeCopy = dateRange;
            dataRangeCopy[day][1] = newDateTime;
            console.log(dataRangeCopy);
            // inputDate[1] = newDateTime;
            // setInputDate(inputDate);
            updateTime(newDateTime, day, 1);
            // return setDateRange(dataRangeCopy);
            // return setDateRange((prevDateRange: DateRange<Date>) => [newDateTime, prevDateRange[1]]);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classes.hourInput}
              placeholder="Choose Time"
              error={touched.dateRange && Boolean(errors.dateRange)}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default BookingForm;
