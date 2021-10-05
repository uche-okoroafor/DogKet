import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    width: '70%',
    margin: 'auto',
  },
  dates: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
  },
  m5: {
    marginRight: '20px',
  },
  bookingForm: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  submit: {
    textTransform: 'uppercase',
    backgroundColor: '#f04040 !important',
    margin: theme.spacing(2, 'auto', 3),
    width: '180px',
    height: '50px',
    marginTop: '60px  !important',
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
  dayLabel: {
    color: 'black',
    textTransform: 'capitalize',
  },
  headerTitle: {
    margin: '50px 0px',
    fontWeight: 900,
  },
}));

export default useStyles;
