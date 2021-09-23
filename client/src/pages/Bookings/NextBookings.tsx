import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Avatar from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import EditButton from './EditButton';
import { Booking } from '../../interface/Requests';

interface Props {
  nextBooking: Booking;
}

export default function NextBookings({ nextBooking }: Props): JSX.Element {
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
      wrapper: {
        textAlign: 'left',
        marginBottom: '15px',
      },
      sectionHr: {
        fontWeight: 900,
        fontSize: '9px',
        color: 'black',
        marginBottom: '10px',
        marginTop: '10px',
      },
      nextBookSubHr: {
        fontWeight: 600,
        fontSize: '16px',
        color: 'black',
      },
      nextBookNameHr: {
        fontWeight: 900,
        fontSize: '13px',
        color: 'black',
      },
      nextBookNameWrapper: {
        display: 'flex',
        marginBottom: '15px',
      },
      tempImg: {
        borderRadius: '50%',
        width: '20px',
        marginRight: '10px',
        backgroundColor: deepOrange[500],
      },
      icon: {
        fontSize: '15px',
        color: 'rgb(209,209,209)',
      },
    }),
  );
  const pageClasses = pageStyles();

  return (
    <div className={pageClasses.wrapper}>
      <Paper className={pageClasses.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom className={pageClasses.sectionHr}>
                  YOUR NEXT BOOKING
                </Typography>
                {nextBooking?.startDate ? (
                  <Typography gutterBottom variant="subtitle1" className={pageClasses.nextBookSubHr}>
                    {nextBooking?.startDate}
                  </Typography>
                ) : (
                  <Typography gutterBottom variant="subtitle1">
                    No Upcoming booking
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Typography variant="body2" className={pageClasses.nextBookNameWrapper}>
                  {/* TEMP img tags */}
                  {/* <Avatar alt="Remy Sharp" src="../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                  <div className={pageClasses.tempImg}></div>
                  <div className={pageClasses.nextBookNameHr}>{nextBooking?.sitterId}</div>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <EditButton requestId={nextBooking?._id} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
