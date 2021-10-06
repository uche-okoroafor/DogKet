import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listings: {
    backgroundColor: '#ffffff',
    overflow: 'auto',
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
    width: '150px',
    color: '#0a0a0a !important',
    borderColor: '#aaa !important',
    textTransform: 'uppercase',
    padding: theme.spacing(1),
  },
}));

export default useStyles;
