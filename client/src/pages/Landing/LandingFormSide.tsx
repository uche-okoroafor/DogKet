import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles/Landing';
import login from '../../helpers/APICalls/login';
// import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import Logo from '../../Images/logo.png';

export default function Landing(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = () => {
    console.log('submited');
  };

  return (
    <Box className={classes.authWrapper}>
      {/* <AuthHeader linkTo="/signup" asideText="Don't have an account?" btnText="Create account" /> */}
      <Box className={classes.logoWrapper}>
        <img src={Logo} alt={'logo'} />
      </Box>
      <Box width="100%" maxWidth={450} p={3} alignSelf="center">
        <Grid container>
          <Grid item xs>
            <Typography className={classes.welcome} component="h1" variant="h5">
              Find the care your dog deserves
            </Typography>
          </Grid>
        </Grid>
        {/* <LoginForm handleSubmit={handleSubmit} /> */}
      </Box>
      <Box p={1} alignSelf="center" />
    </Box>
  );
}
