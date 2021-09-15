import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    padding: '0 40px 70px',
  },
  typo: {
    margin: 20,
    fontWeight: 700,
  },
  title: {
    fontWeight: 700,
    textAlign: 'center',
    padding: '30px',
  },
  label: {
    padding: 10,
    margin: 10,
    fontWeight: 700,
    width: 150,
    display: 'inline-block',
    textAlign: 'right',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  box: {
    padding: 10,
  },
  main: {
    padding: '40px',
    minHeight: '100vh',
    background: 'primary',
    width: '100%',
  },
  button: {
    width: 120,
    height: 40,
    margin: '20px auto',
    alignSelf: 'center',
    display: 'block',
  },
}));

export default useStyles;
