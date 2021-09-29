import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  paper: {
    margin: 'auto',
  },
  main: {
    minHeight: '70vh',
    background: 'primary',
    margin: ' 15vh auto',
    width: '60vw',
  },
  box: {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '5%',
  },
  title: {
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'capitalize',
    padding: 30,
  },
  avatar: {
    margin: 'auto',
    width: 100,
    height: 100,
  },
  typography: {
    textAlign: 'center',
    color: 'primary',
  },
  button: {
    margin: 'auto',
    display: 'block',
  },
}));

export default useStyles;
