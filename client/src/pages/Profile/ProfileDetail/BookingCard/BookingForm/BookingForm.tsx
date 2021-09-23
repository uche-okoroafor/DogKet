import { Dispatch, SetStateAction } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange } from '@mui/lab/DateRangePicker';
import TimePicker from '@mui/lab/TimePicker';
import { Sitter } from '../../sampleData';
import useStyles from './useStyles';
import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import { CircularProgress, FormHelperText } from '@material-ui/core';

interface Props {
  sitter: Sitter;
  dateRange: DateRange<Date>;
  setDateRange: Dispatch<SetStateAction<DateRange<Date>>>;
  onSubmit: (
    { dateRange }: { dateRange: DateRange<Date | null> },
    {
      setSubmitting,
    }: FormikHelpers<{
      dateRange: DateRange<Date | null>;
    }>,
  ) => void;
}

const formSchema: { dateRange: DateRange<Date | null> } = { dateRange: [null, null] };

const validationSchema = Yup.object().shape({
  dateRange: Yup.array().of(Yup.date().typeError('Wrong Date Type').required('Required').nullable()),
});

const BookingForm = ({ sitter, dateRange, setDateRange, onSubmit }: Props): JSX.Element => {
  const classes = useStyles();

  const handleChange = (newDateRange: DateRange<Date>) => {
    setDateRange(newDateRange);
  };

  const onValidate = (values: { dateRange: DateRange<Date | null> }) => {
    const errors: { dateRange?: string | null } = {};
    if (!values.dateRange || !values.dateRange[0] || !values.dateRange[1]) {
      errors.dateRange = 'Please choose Date and Time.';
    }
    return errors;
  };

  return (
    <Formik initialValues={formSchema} validationSchema={validationSchema} onSubmit={onSubmit} validate={onValidate}>
      {({ handleSubmit, values, touched, errors, isSubmitting }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDateRangePicker
            inputFormat="dd MMM yyyy"
            disableMaskedInput={true}
            startText={null}
            endText={null}
            value={dateRange}
            onChange={(date) => {
              values.dateRange = date;
              return handleChange(values.dateRange);
            }}
            renderInput={(startProps, endProps) => (
              <Form onSubmit={handleSubmit} className={classes.bookingForm}>
                <Typography component="h5" variant="h5" align="center" className={classes.hourlyWage}>
                  {`$ ${sitter.sitterWage}/ hr`}
                </Typography>
                <Rating name="read-only" value={sitter.sitterRating} readOnly className={classes.rating} />
                <Box display="flex" flexDirection="column" className={classes.inputField}>
                  <Typography variant="body2" className={classes.label}>
                    Drop In
                  </Typography>
                  <Box display="flex" className={classes.inputField}>
                    <TextField
                      {...startProps}
                      InputProps={{
                        startAdornment: <DateRangeIcon className={classes.dateRangeIcon} />,
                        placeholder: 'Choose Date',
                      }}
                      error={touched.dateRange && Boolean(errors.dateRange)}
                    />
                    <TimePicker
                      inputFormat="hh aaa"
                      value={dateRange[0]}
                      views={['hours']}
                      onChange={(newDateTime) => {
                        values.dateRange[0] = newDateTime;
                        return setDateRange((prevDateRange: DateRange<Date>) => [newDateTime, prevDateRange[1]]);
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
                <Box display="flex" flexDirection="column" className={classes.inputField}>
                  <Typography variant="body2" className={classes.label}>
                    Drop Off
                  </Typography>
                  <Box display="flex" className={classes.inputField}>
                    <TextField
                      {...endProps}
                      InputProps={{
                        startAdornment: <DateRangeIcon className={classes.dateRangeIcon} />,
                        placeholder: 'Choose Date',
                      }}
                      error={touched.dateRange && Boolean(errors.dateRange)}
                    />
                    <TimePicker
                      inputFormat="hh aaa"
                      value={dateRange[1]}
                      views={['hours']}
                      onChange={(newDateTime) => {
                        values.dateRange[1] = newDateTime;
                        return setDateRange((prevDateRange: DateRange<Date>) => [prevDateRange[0], newDateTime]);
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
                <FormHelperText className={classes.errorHelperText}>
                  {(touched.dateRange && (errors.dateRange || errors.dateRange?.[0] || errors.dateRange?.[1])) || null}
                </FormHelperText>
                <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
                  {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Send Request'}
                </Button>
              </Form>
            )}
          />
        </LocalizationProvider>
      )}
    </Formik>
  );
};

export default BookingForm;
