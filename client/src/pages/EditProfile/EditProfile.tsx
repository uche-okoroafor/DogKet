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
import useStyles from './useStyles';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();

  // TODO : to add a function that handle the state of the date change
  const [selectedDate, setSelectedDate] = useState('1998-0git status6-15');

  // TODO : toggle the gender from male to female on select change
  const [gender, setGender] = useState('male');

  // TODO : to change the style of entering phone number textfield from none to block
  const [block, setBlock] = useState('none');

  return (
    <Container component="main" className={classes.main}>
      <CssBaseline />
      <Grid container>
        <Grid item md={8} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography variant="h4" className={classes.title}>
              Edit Profile
            </Typography>
            <form className={classes.form} noValidate>
              <Box className={classes.box}>
                <label htmlFor="first-name" className={classes.label}>
                  first name
                </label>
                <TextField
                  type="text"
                  id="first-name"
                  placeholder="john"
                  variant="outlined"
                  className={classes.textField}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="last-name" className={classes.label}>
                  last name
                </label>
                <TextField
                  type="text"
                  id="last-name"
                  placeholder="Doe"
                  variant="outlined"
                  className={classes.textField}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="first-name" className={classes.label}>
                  gender
                </label>
                <FormControl variant="outlined">
                  <Select
                    labelId="select-outlined-label"
                    id="select-outlined"
                    value={gender}
                    className={classes.select}
                  >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className={classes.box}>
                <label htmlFor="birth-date" className={classes.label}>
                  birth date
                </label>
                <TextField
                  type="date"
                  id="birth-date"
                  variant="outlined"
                  className={classes.textField}
                  defaultValue={selectedDate}
                  value={selectedDate}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="email-address" className={classes.label}>
                  email address
                </label>
                <TextField
                  type="email"
                  id="email-address"
                  placeholder="john-doe@gmail.com"
                  variant="outlined"
                  className={classes.textField}
                />
              </Box>
              <Box className={classes.box} style={{ display: `${block}` }}>
                <label htmlFor="last-name" className={classes.label}></label>
                <TextField
                  type="text"
                  id="last-name"
                  placeholder="enter phone number"
                  variant="outlined"
                  className={classes.textField}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="phone-number" className={classes.label}>
                  phone number
                </label>
                <Box className={classes.boxStyle}>
                  <Typography style={{ display: 'inline-block', fontStyle: 'italic' }}>
                    No Phone number entered
                  </Typography>
                  <Button variant="outlined" color="secondary" size="large">
                    Add phone number
                  </Button>
                </Box>
              </Box>
              <Box className={classes.box}>
                <label htmlFor="where-live" className={classes.label}>
                  where you live
                </label>
                <TextField
                  type="text"
                  id="where-live"
                  placeholder="Address"
                  variant="outlined"
                  className={classes.textField}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="describe" className={classes.label}>
                  describe your self
                </label>
                <TextField
                  id="describe"
                  placeholder="About you"
                  variant="outlined"
                  className={classes.textField}
                  multiline
                  rows={6}
                />
              </Box>
              <Button variant="contained" color="secondary" size="large" className={classes.button}>
                save
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
