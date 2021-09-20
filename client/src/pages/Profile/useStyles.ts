import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profile: {
    height: 'calc(100vh - 90px)',
    padding: theme.spacing(3),
    backgroundColor: '#eee',
    [theme.breakpoints.down(768)]: {
      padding: theme.spacing(0),
    },
  },
  tempProfileMainSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
}));

export default useStyles;
