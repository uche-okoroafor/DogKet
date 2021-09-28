import { useState } from 'react';
import { Box, Typography, Button, Rating, TextField, CircularProgress, FormHelperText } from '@mui/material';
import { TimePicker, LocalizationProvider, MobileDateRangePicker } from '@mui/lab';
import { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangeIcon from '@mui/icons-material/DateRange';
import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import landingFormStyle from './Styles/LandingForm';

interface Props {
  sitter: any;
}

const formSchema: { dateRange: DateRange<Date | null> } = { dateRange: [null, null] };

const validationSchema = Yup.object().shape({
  dateRange: Yup.array().of(Yup.date().typeError('Wrong Date Type').required('Required').nullable()),
});

const BookingForm = (): JSX.Element => {
  const classes = landingFormStyle();

  const [dateRange, setDateRange] = useState<DateRange<Date | null>>([null, null]);

  const handleSubmit = (
    // 'dateRange' will be used when we send 'submit request' to backend
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { dateRange }: { dateRange: DateRange<Date> },
    { setSubmitting, resetForm }: FormikHelpers<{ dateRange: DateRange<Date> }>,
  ) => {
    // 'setSubmitting' will be used when we send 'submit request' to backend
    // I guess it's related to 'isSubmitting' and 'onSubmit' in Formik
    setSubmitting(false);
    setDateRange([null, null]);
    // resetForm is used in the current version. Assume you submit the form with valid date range inputs successfully.
    // After that, when you try to submit "again" with empty input fields,
    // the form won't show error messages without 'resetForm()' (it should display error messages on UI)
    // and it will submit the previous date range inputs that you already submitted successfully
    // (it shouldn't submit because you try to submit with invalid inputs)
    resetForm({ values: { dateRange: [null, null] } });
  };

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
    <Formik
      initialValues={formSchema}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validate={onValidate}
    >
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
                <Box className={classes.label}>Where</Box>
                <TextField id="outlined-basic" variant="outlined" placeholder="Anywhere" />
                <Box className={classes.label}>Drop In / Drop Off</Box>
                <Box className={classes.dateInputWrapper}>
                  <Box display="flex" flexDirection="column" className={classes.inputField}>
                    <Box display="flex" className={classes.inputField}>
                      <TextField
                        {...startProps}
                        InputProps={{
                          startAdornment: <DateRangeIcon className={classes.dateRangeIcon} />,
                          placeholder: 'Choose Date',
                        }}
                        error={touched.dateRange && Boolean(errors.dateRange)}
                      />
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" className={classes.inputField}>
                    <Box display="flex" className={classes.inputField}>
                      <TextField
                        {...endProps}
                        InputProps={{
                          startAdornment: <DateRangeIcon className={classes.dateRangeIcon} />,
                          placeholder: 'Choose Date',
                        }}
                        error={touched.dateRange && Boolean(errors.dateRange)}
                      />
                    </Box>
                  </Box>
                </Box>
                <FormHelperText className={classes.errorHelperText}>
                  {(touched.dateRange && (errors.dateRange || errors.dateRange?.[0] || errors.dateRange?.[1])) || null}
                </FormHelperText>
                <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
                  {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Find my dog sitter'}
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
