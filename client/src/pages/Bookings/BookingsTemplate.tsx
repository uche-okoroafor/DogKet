import { bookingStyles } from './BookingStyles/BookingsTemplate';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EditButton from './EditButton';

interface Booking {
  userName: string;
  date: string;
  thumbImg: string;
  status: string;
  id: number;
}

interface Props {
  bookings: any;
  sectionName: string;
}

export default function ManageBookings({ bookings, sectionName }: Props): JSX.Element {
  const pageClasses = bookingStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs className={pageClasses.sectionWrapper}>
            <Typography variant="body2" gutterBottom className={pageClasses.sectionHr}>
              {sectionName}
            </Typography>
          </Grid>
          <Grid item>
            {bookings.map((booking: Booking) => (
              <Paper variant="outlined" className={pageClasses.paperOutlineWrap} key={bookings.id}>
                <Grid item container xs={12} sm>
                  <Grid item xs={9}>
                    <Typography gutterBottom variant="subtitle1" className={pageClasses.BookingSubHr}>
                      {booking.date}
                    </Typography>
                    <Typography variant="body2" className={pageClasses.nameWrapper}>
                      {/* TEMP IMG tags */}
                      {/* <Avatar alt="Remy Sharp" src="../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                      <Box className={pageClasses.tempImg}></Box>
                      <Box className={pageClasses.bookingNameHr}>{booking.userName}</Box>
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className={pageClasses.statusWrapper}>
                    <Typography variant="subtitle1" className={pageClasses.statusTxt}>
                      {booking.status}
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={pageClasses.iconWrapper}>
                    <EditButton />
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
