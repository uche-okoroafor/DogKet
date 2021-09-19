import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import React from 'react';
import Calendar from './Calendar';
import CurrentBookings from './CurrentBookings';
import ManageBookings from './ManageBookings';

export default function Bookings(): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={`${classes.root} ${classes.mt}`}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} spacing={10}>
              <CurrentBookings />
              <ManageBookings />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Calendar />
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
