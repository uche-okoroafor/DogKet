import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bookingBox: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 3, 3, 0),
    },
  },
  bookingContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  bookingForm: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hourlyWage: {
    fontWeight: 700,
    padding: theme.spacing(2),
  },
  rating: {
    padding: theme.spacing(0, 0, 1),
  },
  label: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  inputField: {
    padding: theme.spacing(1, 0),
    [theme.breakpoints.between(426, 1440)]: {
      flexDirection: 'column',
      height: '170px',
      justifyContent: 'space-between',
    },
  },
  submit: {
    textTransform: 'uppercase',
    backgroundColor: '#f04040 !important',
    margin: theme.spacing(2, 'auto', 3),
    width: '180px',
    height: '50px',
  },
  dateRangeIcon: {
    color: '#aaa',
    marginRight: theme.spacing(1),
  },
  hourInput: {
    width: '160px',
    [theme.breakpoints.between(426, 1440)]: {
      width: '100%',
      margin: theme.spacing(1, 0),
    },
  },
  errorHelperText: {
    color: 'red !important',
    margin: '0 0 8px !important',
  },
  itemWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '90%',
    // justifyContent: 'space-evenly',
    // height: '15%',
    // margin: 'none',
    width: '100%',
  },
  listWrap: {
    width: '90%',
    margin: 'auto',
  },
  dates: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
  },
  formWrap: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  m5: {
    marginRight: '20px',
  },
  timeLabel: {
    fontWeight: 900,
    textDecoration: 'uppercase',
  },
}));

export default useStyles;
