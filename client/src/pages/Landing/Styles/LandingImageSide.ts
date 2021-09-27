import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  authHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '400px',
    marginRight: '50px',
    flexDirection: 'row',
    minHeight: '100vh',
    paddingTop: 23,
  },
  sitter: {
    color: 'black',
    textDecoration: 'underline',
    padding: '10px',
  },
  login: {
    color: 'white',
    borderColor: 'white',
  },
  signup: {
    color: 'white',
    backgroundColor: 'red',
  },
  button: {
    padding: '10px',
    width: '110px',
  },
}));

export default useStyles;
