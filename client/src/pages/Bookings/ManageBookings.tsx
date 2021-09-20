import 'date-fns';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { deepOrange } from '@material-ui/core/colors';
import BookingsTemplate from './BookingsTemplate';

export default function ManageBookings({ pastBookings, currentBookings }) {
  const pageStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
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
      nextBookHr: {
        fontWeight: 900,
        fontSize: '9px',
        color: 'black',
      },
      nextBookSubHr: {
        fontWeight: 600,
        fontSize: '12px',
        color: 'black',
        margin: '10px 0px',
      },
      nextBookNameHr: {
        fontWeight: 900,
        fontSize: '13px',
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
      paperOutlineWrap: {
        marginBottom: '5px',
        padding: '5px',
      },
      icon: {
        fontSize: '15px',
        color: 'rgb(209,209,209)',
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

  return (
    <div className={pageClasses.text}>
      <Paper className={pageClasses.paper}>
        <BookingsTemplate sectionName={'CURRENT BOOKINGS'} bookings={currentBookings} />
        <BookingsTemplate sectionName={'PAST BOOKINGS'} bookings={pastBookings} />
      </Paper>
    </div>
  );
}
