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
    margin: theme.spacing(4, 0),
  },
  dateRangeIcon: {
    color: '#aaa',
    marginRight: theme.spacing(1),
  },
  showMoreBox: {
    margin: theme.spacing(5, 'auto'),
  },
  showMoreBtn: {
    width: '150px',
    textTransform: 'uppercase',
    padding: theme.spacing(1),
  },
}));

export default useStyles;
