import { useState, useEffect } from 'react';
import { getRequests } from '../../helpers/APICalls/request';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import React from 'react';
import Calendar from './Calendar';
import NextBookings from './NextBookings';
import ManageBookings from './ManageBookings';
import { RequestApiDataSuccess } from '../../interface/Requests';

export default function Bookings(): JSX.Element {
  const classes = useStyles();
  // temp {} to hold data from API request.
  const request: any = {
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
    pastBookings: [
      {
        userName: 'Michael Carnahan',
        date: '21 March 2020, 8-10PM',
        status: 'ACCEPTED',
        thumbImg: 'img.png',
        id: 4,
      },
    ],
  };

  const resModel: RequestApiDataSuccess = {
    nextBooking: {},
    currentBookings: [],
    pastBookings: [],
  };

  interface ResModel {
    nextBooking: any;
    currentBookings: any[];
    pastBookings: any[];
  }

  const [requests, setRequest] = useState<any>(resModel);
  const fetchRequests = async () => {
    console.log('h');
    const resModel = await getRequests();
    console.log(resModel);
    if (resModel) setRequest(resModel);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" className={classes.container}>
        <div className={`${classes.root} ${classes.mt}`}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6} spacing={10}>
              <NextBookings nextBooking={requests.nextBooking} />
              <ManageBookings currentBookings={requests.currentBookings} pastBookings={requests.pastBookings} />
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
