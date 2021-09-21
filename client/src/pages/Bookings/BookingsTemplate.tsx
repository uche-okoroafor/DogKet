import 'date-fns';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import EditButton from './EditButton';

interface Booking {
  ownerId: string;
  sitterId: string;
  startDate: string;
  thumbImg: string;
  status: string;
  _id: string;
}

interface Props {
  bookings: any;
  sectionName: string;
}

export default function ManageBookings({ bookings, sectionName }: Props): JSX.Element {
  const pageStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      text: {
        textAlign: 'left',
      },
      sectionHr: {
        fontWeight: 900,
        fontSize: '9px',
        color: 'black',
        marginTop: '8px',
      },
      sectionWrapper: {
        marginBottom: '-10px',
      },
      BookingSubHr: {
        fontWeight: 600,
        fontSize: '12px',
        color: 'black',
        margin: '10px 0px',
      },
      bookingNameHr: {
        fontWeight: 900,
        fontSize: '13px',
      },
      nameWrapper: {
        display: 'flex',
        marginBottom: '15px',
      },
      tempImg: {
        borderRadius: '50%',
        width: '20px',
        marginRight: '10px',
        backgroundColor: deepOrange[500],
      },
      paperOutlineWrap: {
        marginBottom: '7px',
        padding: '5px 10px',
      },
      iconWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      statusWrapper: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '8px',
        color: 'rgb(209,209,209)',
        fontWeigth: '900',
      },
      statusTxt: {
        fontSize: '10px',
        color: 'rgb(209,209,209)',
        fontWeight: 900,
      },
    }),
  );
  const pageClasses = pageStyles();
  console.log(bookings);
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
              <Paper variant="outlined" className={pageClasses.paperOutlineWrap} key={bookings._id}>
                <Grid item container xs={12} sm>
                  <Grid item xs={9}>
                    <Typography gutterBottom variant="subtitle1" className={pageClasses.BookingSubHr}>
                      {booking.startDate}
                    </Typography>
                    <Typography variant="body2" className={pageClasses.nameWrapper}>
                      {/* TEMP IMG tags */}
                      {/* <Avatar alt="Remy Sharp" src="../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                      <div className={pageClasses.tempImg}></div>
                      <div className={pageClasses.bookingNameHr}>{booking.sitterId}</div>
                    </Typography>
                  </Grid>
                  <Grid item xs={2} className={pageClasses.statusWrapper}>
                    <Typography variant="subtitle1" className={pageClasses.statusTxt.toUpperCase()}>
                      {booking.status}
                    </Typography>
                  </Grid>
                  <Grid item xs={1} className={pageClasses.iconWrapper}>
                    <EditButton requestId={booking._id} />
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
