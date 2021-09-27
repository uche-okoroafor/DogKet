import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Dog from '../../../Images/landing-dog-sqr.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  imageSideWrapper: {
    backgroundImage: `url(${Dog})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
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
    paddingTop: 23,
  },
  link: {
    margin: '0px',
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
