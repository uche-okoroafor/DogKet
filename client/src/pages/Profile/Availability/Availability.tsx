import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './useStyles';
import { useState } from 'react';
import { Button, Rating, TextField, CircularProgress, FormHelperText } from '@mui/material';
import { TimePicker, LocalizationProvider, MobileDateRangePicker } from '@mui/lab';
import { DateRange } from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateRangeIcon from '@mui/icons-material/DateRange';
import * as Yup from 'yup';
import { Formik, Form, FormikHelpers } from 'formik';
import { Profile } from '../../../interface/Profile';
import AvailabilityForm from './AvailabilityForm/AvailabilityForm';
// import useStyles from './useStyles';

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
// {
//   sunday: [null, null],
//   monday: [null, null],
//   tuesday: [null, null],
//   wednesday: [null, null],
//   thursday: [null, null],
//   friday: [null, null],
//   saturday: [null, null],
// };

const validationSchema = Yup.object().shape({
  dateRange: Yup.array().of(Yup.date().typeError('Wrong Date Type').required('Required').nullable()),
});
// const dateRange = new Date();

const curr = new Date();
const daysInWeek: string[] = [];

for (let i = 1; i <= 7; i++) {
  const first = curr.getDate() - curr.getDay() + i;
  const day = new Date(curr.setDate(first)).toISOString();
  daysInWeek.push(day);
}
console.log(daysInWeek);
const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// const daysInWeekFormated = [];
const weekdayOptions = { weekday: 'long' } as const;
const dayOptions = { month: 'short', day: 'numeric' } as const;

const Row = (): JSX.Element => {
  return (
    <Box>
      <Box></Box>
    </Box>
  );
};

interface hourSchema {
  hourRange: (null | Date)[];
}

interface RangeSchema {
  sunday: (null | Date)[];
  monday: (null | Date)[];
  tuesday: (null | Date)[];
  wednesday: (null | Date)[];
  thursday: (null | Date)[];
  friday: (null | Date)[];
  saturday: (null | Date)[];
}
const Security = (): JSX.Element => {
  // const defaultArray = [null, null, null, null, null, null, null, null, null, null, null, null, null, null]
  const classes = useStyles();
  const [dateRange, setDateRange] = useState<RangeSchema>(formSchema.dateRange);

  const mockRandomRating = Math.floor(1 + Math.random() * 5);

  const handleSubmit = (
    // 'dateRange' will be used when we send 'submit request' to backend
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { dateRange }: { dateRange: RangeSchema },
    { setSubmitting, resetForm }: FormikHelpers<{ dateRange: RangeSchema }>,
  ) => {
    // 'setSubmitting' will be used when we send 'submit request' to backend
    // I guess it's related to 'isSubmitting' and 'onSubmit' in Formik
    setSubmitting(false);
    setDateRange(formSchema.dateRange);
    // resetForm is used in the current version. Assume you submit the form with valid date range inputs successfully.
    // After that, when you try to submit "again" with empty input fields,
    // the form won't show error messages without 'resetForm()' (it should display error messages on UI)
    // and it will submit the previous date range inputs that you already submitted successfully
    // (it shouldn't submit because you try to submit with invalid inputs)
    resetForm({ values: { dateRange: formSchema.dateRange } });
  };

  // const handleChange = (newDateRange: DateRange<Date>) => {
  //   setDateRange(newDateRange);
  // };

  const onValidate = (values: { dateRange: RangeSchema }) => {
    console.log(values, 'k');
    const errors: { dateRange?: string | null } = {};
    if (!values.dateRange) {
      errors.dateRange = 'Please choose Date and Time.';
    }
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
                  {/* <MobileDateRangePicker
                    inputFormat="dd MMM yyyy"
                    disableMaskedInput={true}
                    startText={null}
                    endText={null}
                    value={formSchema.dateRange}
                    onChange={(date) => {
                      // values.dateRange = date;
                      // return handleChange(values.dateRange);
                    }} */}
                  {/* renderInput */}
                  {/* {(startProps, endProps) => ( */}
                  <Form onSubmit={handleSubmit} className={classes.bookingForm}>
                    {weekdays.map((day, index) => (
                      <ListItem key={index}>
                        <Box className={classes.itemWrap}>
                          <Box className={classes.dates}>
                            <Box className={`${classes.m5} ${classes.dayLabel}`}>
                              {day}
                              {/* {new Date(week).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, */}
                            </Box>
                            {/* <Box className={`${classes.m5} ${classes.weekdayLabel}`}>
                                {new Date(week).toLocaleDateString('en-US', { weekday: 'long' })}
                              </Box> */}
                          </Box>
                          {/* <Box className={classes.formWrap}>
                              <Box className={`${classes.m5} ${classes.timeLabel}`}>From</Box>
                              <Box className={classes.m5}>
                                <AvailabilityForm
                                  values={values}
                                  touched={touched}
                                  errors={errors}
                                  setDateRange={setDateRange}
                                  dateRange={dateRange}
                                  i={index}
                                />
                              </Box>
                              <Box className={`${classes.m5} ${classes.timeLabel}`}>To</Box>
                              <Box>
                                <AvailabilityForm
                                  values={values}
                                  touched={touched}
                                  errors={errors}
                                  setDateRange={setDateRange}
                                  dateRange={dateRange}
                                  i={index}
                                />
                              </Box>
                            </Box> */}
                          <AvailabilityForm
                            values={values}
                            touched={touched}
                            errors={errors}
                            setDateRange={setDateRange}
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
                    <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
                      {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Save'}
                    </Button>
                  </Form>
                  {/* )} */}
                  {/* /> */}
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
