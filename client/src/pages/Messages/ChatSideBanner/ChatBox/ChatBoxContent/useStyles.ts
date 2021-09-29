import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chatBoxContent: {
    margin: theme.spacing(1, 2, 0, 0.5),
    flexGrow: 1,
  },
  chatInfo: {
    width: 'calc(100% - 72px)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  username: {
    fontSize: 16,
    fontWeight: 700,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(0.5),
  },
  previewText: {
    fontSize: 12,
    color: '#9CADC8',
    height: 18,
    overflow: 'hidden',
  },
  boldingText: {
    fontSize: 13,
    fontWeight: 700,
    color: 'Black',
  },
  smallScreenTime: {
    width: '72px',
    fontSize: 12,
    color: '#9CADC8',
    textAlign: 'right',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  timeInfo: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  receivedTime: {
    width: '72px',
    fontSize: 12,
    color: '#9CADC8',
    textAlign: 'right',
  },
}));

export default useStyles;
