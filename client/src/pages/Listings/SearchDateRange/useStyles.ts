import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dateRangeBox: {
    position: 'relative',
  },
  dateRangeIcon: {
    color: '#aaa',
    marginRight: theme.spacing(1),
  },
  fakePlaceholder: {
    position: 'absolute',
    top: '18px',
    left: '48px',
    font: 'inherit',
    fontSize: '14px',
    color: '#aaa',
    fontWeight: 700,
  },
  formattedDateRangeText: {
    position: 'absolute',
    top: '18px',
    left: '48px',
  },
  startDateField: {
    color: 'transparent !important',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
    },
  },
  endDateField: {
    display: 'none !important',
  },
}));

export default useStyles;
