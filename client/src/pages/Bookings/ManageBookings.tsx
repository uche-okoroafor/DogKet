import 'date-fns';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BookingsTemplate from './BookingsTemplate';
import { Booking } from '../../interface/Requests';

interface Props {
  pastBookings: Booking[];
  currentBookings: Booking[];
  updateStatusState: (id: string, status: string, sectionName: string) => void;
}

export default function ManageBookings({ pastBookings, currentBookings, updateStatusState }: Props): JSX.Element {
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
        <BookingsTemplate
          updateStatusState={updateStatusState}
          sectionName={'current bookings'}
          bookings={currentBookings}
        />
        <BookingsTemplate updateStatusState={updateStatusState} sectionName={'past bookings'} bookings={pastBookings} />
      </Paper>
    </div>
  );
}
