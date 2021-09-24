import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EditButton from './EditButton';
import { nextBookingClasses } from './BookingStyles/NextBooking';

interface Props {
  nextBooking: any;
}

export default function NextBookings({ nextBooking }: Props): JSX.Element {
  const pageClasses = nextBookingClasses();

  return (
    <Box className={pageClasses.wrapper}>
      <Paper className={pageClasses.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom className={pageClasses.sectionHr}>
                  your next booking
                </Typography>
                <Typography gutterBottom variant="subtitle1" className={pageClasses.nextBookSubHr}>
                  {nextBooking.date}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={pageClasses.nextBookNameWrapper}>
                  {/* TEMP img tags */}
                  {/* <Avatar alt="Remy Sharp" src="../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                  <div className={pageClasses.tempImg}></div>
                  <div className={pageClasses.nextBookNameHr}>{nextBooking.userName}</div>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <EditButton />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
