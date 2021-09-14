import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
      width: '99%',
      margin: '0 auto',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#eee',
  },
  signupOuterContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  signupContainer: {
    padding: theme.spacing(5, 15),
    borderRadius: theme.shape.borderRadius,
    height: '700px',
    [theme.breakpoints.down(768)]: {
      padding: theme.spacing(5),
    },
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
    fontFamily: "'Open Sans'",
    textAlign: 'center',
  },
  extraSection: {
    width: '170px',
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alreadyMember: {
    fontWeight: 700,
  },
  loginText: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

export default useStyles;
