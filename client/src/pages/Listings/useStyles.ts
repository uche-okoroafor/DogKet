import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listings: {
    backgroundColor: '#ffffff',
  },
  searchTitleBox: {
    margin: theme.spacing(2, 0),
  },
  searchTitleText: {
    fontWeight: 700,
  },
  searchBox: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  dateRangeIcon: {
    color: '#aaa',
    marginRight: theme.spacing(1),
  },
  sitterLists: {
    maxWidth: '1280px',
  },
  showMoreBox: {
    margin: theme.spacing(1, 'auto', 4),
  },
  showMoreBtn: {
    color: '#616161 !important',
    border: '1px solid #616161 !important',
    width: '150px',
    textTransform: 'uppercase',
    padding: theme.spacing(1),
  },
}));

export default useStyles;
