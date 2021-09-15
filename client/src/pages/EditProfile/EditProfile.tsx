/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Container,
  Paper,
  Box,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './useStyles';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [gender, setGender] = useState('male');
  const optionSelect = [];
  for (let i = 1; i < 32; i++) {
    optionSelect.push(
      <MenuItem value={i} key={i}>
        {i}
      </MenuItem>,
    );
  }

  return (
    <Container component="main" className={classes.main}>
      <CssBaseline />
      <Grid container>
        <Grid item md={2} sm={12}>
          <Typography className={classes.typo} variant="h6">
            Edit Profile
          </Typography>
          <Typography className={classes.typo}>Profile Photo</Typography>
          <Typography className={classes.typo}>Availability</Typography>
          <Typography className={classes.typo}>Payment</Typography>
          <Typography className={classes.typo}>Security</Typography>
          <Typography className={classes.typo}>Settings</Typography>
        </Grid>
        <Grid item md={8} sm={12}>
          <Paper>
            <Typography variant="h4" className={classes.title}>
              Edit Profile
            </Typography>
            <form className={classes.form} noValidate>
              <Box className={classes.box}>
                <label htmlFor="first-name" className={classes.label}>
                  FIRST NAME
                </label>
                <TextField type="text" id="first-name" placeholder="john" variant="outlined" style={{ width: '70%' }} />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="last-name" className={classes.label}>
                  LAST NAME
                </label>
                <TextField type="text" id="last-name" placeholder="john" variant="outlined" style={{ width: '70%' }} />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="first-name" className={classes.label}>
                  GENDER
                </label>
                <FormControl variant="outlined">
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={gender}
                    onChange={() => {}}
                    style={{ width: '100px' }}
                  >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className={classes.box}>
                <label htmlFor="first-name" className={classes.label}>
                  BIRTH DATE
                </label>
                <Box component="span" style={{ width: '70%' }}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      views={['month']}
                      inputVariant="outlined"
                      value={selectedDate}
                      onChange={() => {}}
                      style={{ width: '100px' }}
                    />
                  </MuiPickersUtilsProvider>
                  <FormControl variant="outlined">
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      style={{ width: '100px' }}
                    >
                      {optionSelect}
                    </Select>
                  </FormControl>{' '}
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      views={['year']}
                      inputVariant="outlined"
                      value={selectedDate}
                      onChange={() => {}}
                      style={{ width: '100px' }}
                    />
                  </MuiPickersUtilsProvider>
                </Box>
              </Box>
              <Box className={classes.box}>
                <label htmlFor="phone-number" className={classes.label}>
                  PHONE NUMBER
                </label>
                <Typography style={{ display: 'inline-block', margin: '10px', fontStyle: 'italic' }}>
                  No Phone number entered
                </Typography>
                <Button variant="outlined" color="secondary" size="large">
                  Add phone number
                </Button>
              </Box>
              <Box className={classes.box}>
                <label htmlFor="where-live" className={classes.label}>
                  WHERE YOU LIVE
                </label>
                <TextField
                  type="text"
                  id="where-live"
                  placeholder="Address"
                  variant="outlined"
                  style={{ width: '70%' }}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="describe" className={classes.label}>
                  DESCRIBE YOUR SELF
                </label>
                <TextField id="describe" placeholder="About you" variant="outlined" style={{ width: '70%' }} />
              </Box>
              <Button variant="contained" color="secondary" size="large" className={classes.button}>
                SAVE
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
