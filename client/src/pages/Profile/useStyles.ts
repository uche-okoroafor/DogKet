import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profile: {
    height: 'calc(100vh - 90px)',
    padding: theme.spacing(3),
    [theme.breakpoints.down(768)]: {
      padding: theme.spacing(0),
    },
    display: 'flex',
    flexDirection: 'row',
  },
  contentWrap: {
    width: '78%',
    height: '100%',
    padding: '10px',
  },
}));

export default useStyles;
