import 'date-fns';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BookingsTemplate from './BookingsTemplate';
interface Props {
  pastBookings: [];
  currentBookings: [];
}

export default function ManageBookings({ pastBookings, currentBookings }: Props): JSX.Element {
  const pageStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
      text: {
        textAlign: 'left',
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
