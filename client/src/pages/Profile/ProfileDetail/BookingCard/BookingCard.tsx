import { Dispatch, SetStateAction, FormEvent } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@material-ui/core/Paper';
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
import { Sitter } from '../sampleData';
import useStyles from './useStyles';

interface Props {
  sitter: Sitter;
  dateRange: DateRange<Date>;
  setDateRange: Dispatch<SetStateAction<DateRange<Date>>>;
}

const BookingCard = ({ sitter, dateRange, setDateRange }: Props): JSX.Element => {
  const classes = useStyles();

  const handleChange = (newDateRange: DateRange<Date>) => {
    setDateRange(newDateRange);
  };

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(dateRange);
  };

  return (
    <Grid item xs={12} sm={5} md={4} lg={4} xl={3}>
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateRangePicker
                inputFormat="dd MMM yyyy"
                disableMaskedInput={true}
                startText={null}
                endText={null}
                value={dateRange}
                onChange={handleChange}
                renderInput={(startProps, endProps) => (
                  <form onSubmit={handleSubmit} className={classes.bookingForm}>
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
                        />
                        <TimePicker
                          inputFormat="hh aaa"
                          value={dateRange[0]}
                          views={['hours']}
                          onChange={(newDateTime) =>
                            setDateRange((prevDateRange: DateRange<Date>) => [newDateTime, prevDateRange[1]])
                          }
                          renderInput={(params) => (
                            <TextField {...params} className={classes.hourInput} placeholder="Choose Time" />
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
                        />
                        <TimePicker
                          inputFormat="hh aaa"
                          value={dateRange[1]}
                          views={['hours']}
                          onChange={(newDateTime) =>
                            setDateRange((prevDateRange: DateRange<Date>) => [prevDateRange[0], newDateTime])
                          }
                          renderInput={(params) => (
                            <TextField {...params} className={classes.hourInput} placeholder="Choose Time" />
                          )}
                        />
                      </Box>
                    </Box>
                    <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
                      Send Request
                    </Button>
                  </form>
                )}
              />
            </LocalizationProvider>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default BookingCard;
