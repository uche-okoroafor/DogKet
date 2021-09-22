import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import React from 'react';
import Calendar from './Calendar';
import NextBookings from './NextBookings';
import ManageBookings from './ManageBookings';

export default function Bookings(): JSX.Element {
  const classes = useStyles();

  const requests: any = {
    nextBooking: {
      userName: 'Norma Byers',
      date: '5 April 2020, 10-12PM',
      status: 'ACCEPTED',
      thumbImg: 'img.png',
      id: 1,
    },
    currentBookings: [
      {
        userName: 'Charles Compton',
        date: '8 April 2020, 7-9PM',
        status: 'ACCEPTED',
        thumbImg: 'img.png',
        id: 2,
      },
      {
        userName: 'Joan Blakeney',
        date: '30 March 2020, 8-12AM',
        status: 'DECLINED',
        thumbImg: 'img.png',
        id: 3,
      },
    ],
    pastBooking: [
      {
        userName: 'Michael Carnahan',
        date: '21 March 2020, 8-10PM',
        status: 'ACCEPTED',
        thumbImg: 'img.png',
        id: 4,
      },
    ],
  };

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.container}>
        <Box className={`${classes.root} ${classes.mt}`}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} spacing={10}>
              <NextBookings nextBooking={requests.nextBooking} />
              <ManageBookings currentBookings={requests.currentBookings} pastBookings={requests.pastBooking} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Calendar />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
