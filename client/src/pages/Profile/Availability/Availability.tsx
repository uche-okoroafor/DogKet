import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './useStyles';
import { useState } from 'react';
import { Button, CircularProgress, FormHelperText } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import AvailabilityForm from './AvailabilityForm/AvailabilityForm';
import patchProfile from '../../../helpers/APICalls/updateProfile';
import createUpdateProfile from '../../../helpers/APICalls/createProfile';

const formSchema: { dateRange: RangeSchema } = {
  dateRange: {
    sunday: [null, null],
    monday: [null, null],
    tuesday: [null, null],
    wednesday: [null, null],
    thursday: [null, null],
    friday: [null, null],
    saturday: [null, null],
  },
};

const reqArrayOfDates = Yup.array().of(Yup.date().typeError('Wrong Date Type').required('Required'));
const validationSchema = Yup.object().shape({
  sunday: reqArrayOfDates,
  monday: reqArrayOfDates,
  tuesday: reqArrayOfDates,
  wednesday: reqArrayOfDates,
  thursday: reqArrayOfDates,
  friday: reqArrayOfDates,
  saturday: reqArrayOfDates,
});

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

interface RangeSchema {
  sunday: DateRange<Date | null>;
  monday: DateRange<Date | null>;
  tuesday: DateRange<Date | null>;
  wednesday: DateRange<Date | null>;
  thursday: DateRange<Date | null>;
  friday: DateRange<Date | null>;
  saturday: DateRange<Date | null>;
}

const Security = (): JSX.Element => {
  const classes = useStyles();
  const [dateRange, setDateRange] = useState<RangeSchema>(formSchema.dateRange);
  const [formError, setformError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (
    { dateRange }: { dateRange: RangeSchema },
    { setSubmitting, resetForm }: FormikHelpers<{ dateRange: RangeSchema }>,
  ) => {
    validationSchema.isValid(dateRange).then(async function (valid) {
      if (valid) {
        try {
          await patchProfile({ availability: dateRange }, '615c048301ddad452479c963');
          setSubmitting(false);
          setDateRange(formSchema.dateRange);
          resetForm({ values: { dateRange: formSchema.dateRange } });
          setformError(false);
          setErrorMessage('');
        } catch {
          setErrorMessage('Failed to save data. Please try');
          setformError(true);
          setSubmitting(false);
        }
      } else {
        setErrorMessage('Please fill all Times');
        setformError(true);
        setSubmitting(false);
      }
      return;
    });
  };

  const onValidate = (values: { dateRange: RangeSchema }) => {
    const errors: { dateRange?: string | null } = {};
    validationSchema.isValid(values.dateRange).then(function (valid) {
      if (!valid) errors.dateRange = 'Please fill all Times.';
    });

    return errors;
  };

  const updateTime = (time: Date, day: string, i: number) => {
    const dateRangeCopy: any = { ...dateRange };
    dateRangeCopy[day][i] = time;
    setDateRange(dateRangeCopy);
  };

  return (
    <Grid item xs={12} sm={9} elevation={6} component={Paper} square>
      <Box height="100%" display="flex" justifyContent="center">
        <Box width="100%">
          <Typography className={classes.headerTitle} component="h5" variant="h5" align="center">
            Your Availability
          </Typography>
          <List className={classes.listWrap}>
            <Formik
              initialValues={formSchema}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validate={onValidate}
            >
              {({ handleSubmit, values, touched, errors, isSubmitting }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Form onSubmit={handleSubmit} className={classes.bookingForm}>
                    {weekdays.map((day, index) => (
                      <ListItem key={index}>
                        <Box className={classes.itemWrap}>
                          <Box className={classes.dates}>
                            <Box className={`${classes.m5} ${classes.dayLabel}`}>{day}</Box>
                          </Box>
                          <AvailabilityForm
                            values={values}
                            touched={touched}
                            errors={errors}
                            dateRange={dateRange}
                            day={day}
                            updateTime={updateTime}
                          />
                        </Box>
                      </ListItem>
                    ))}
                    <FormHelperText className={classes.errorHelperText}>
                      {(touched.dateRange && (errors.dateRange || errors.dateRange?.[0] || errors.dateRange?.[1])) ||
                        null}
                    </FormHelperText>
                    {formError && <Box className={classes.errorHelperText}>{errorMessage}</Box>}
                    <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
                      {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
                    </Button>
                  </Form>
                </LocalizationProvider>
              )}
            </Formik>
          </List>
        </Box>
      </Box>
    </Grid>
  );
};

export default Security;
