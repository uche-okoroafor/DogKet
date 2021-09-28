import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  activeChatHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 124,
    paddingRight: theme.spacing(3),
    boxShadow: '0 2px 20px 0 rgba(88,133,196,0.10)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(3),
  },
  username: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 700,
    margin: theme.spacing(0, 1.5),
  },
  ellipsis: {
    color: '#0a0a0a',
    marginRight: theme.spacing(3),
    opacity: 0.5,
  },
}));

export default useStyles;
