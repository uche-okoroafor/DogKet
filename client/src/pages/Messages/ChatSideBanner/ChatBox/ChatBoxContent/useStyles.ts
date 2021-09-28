import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chatBoxContent: {
    margin: theme.spacing(1, 2, 0, 0.5),
    flexGrow: 1,
  },
  chatInfo: {
    width: 'calc(100% - 72px)',
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
  },
  boldingText: {
    fontSize: 13,
    fontWeight: 700,
    color: 'Black',
  },
  receivedTime: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '72px',
    fontSize: 12,
    color: '#9CADC8',
    marginRight: theme.spacing(0.5),
  },
}));

export default useStyles;
