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
import { RequestApiDataSuccess, RequestApiData } from '../../interface/Requests';

export default function Bookings(): JSX.Element {
  const classes = useStyles();

  const resModel: RequestApiDataSuccess = {
    nextBooking: {},
    currentBookings: [],
    pastBookings: [],
  };
  const returnRequestType = (success): RequestApiDataSuccess => success.resModel;
  const [requests, setRequest] = useState<RequestApiDataSuccess>(resModel);

  useEffect(() => {
    const fetchRequests = async () => {
      // console.log('h');
      const success = await getRequests();
      const resModelSuccess = returnRequestType(success);
      console.log(success);
      if (resModelSuccess) setRequest(resModelSuccess);
    };
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
              <Calendar currentBookings={requests.currentBookings} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
