import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  editProfileContainer: {
    margin: 'auto',
  },
  form: {
    width: '100%',
    padding: '0 40px',
  },
  typography: {
    margin: 20,
    fontWeight: 700,
  },
  title: {
    fontWeight: 700,
    textAlign: 'center',
    padding: '5px',
  },
  label: {
    padding: 10,
    margin: 10,
    fontWeight: 700,
    width: 150,
    display: 'inline-block',
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  textField: {
    width: '60%',
  },
  box: {
    padding: 2.5,
  },
  boxStyle: {
    display: 'inline-flex',
    width: '60%',
    justifyContent: 'space-between',
  },
  main: {
    padding: '40px',
    minHeight: '100vh',
    background: 'primary',
    margin: 'auto',
  },
  button: {
    width: 120,
    height: 40,
    margin: '20px auto',
    alignSelf: 'center',
    display: 'block',
    textTransform: 'uppercase',
  },
  grid: {
    margin: 'auto',
  },
  select: {
    width: '150%',
  },
  phone: {
    display: 'inline-block',
    fontStyle: 'italic',
  },
}));

export default useStyles;
