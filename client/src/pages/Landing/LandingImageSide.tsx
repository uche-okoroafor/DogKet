import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles/LandingImageSide';
import login from '../../helpers/APICalls/login';
// import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Dog from '../../Images/landing-dog.jpg';

export default function Landing(): JSX.Element {
  const classes = useStyles();
  const linkTo = '';
  return (
    <Box className={classes.imageSideWrapper}>
      <Box p={1} className={classes.authHeader}>
        <Link>
          <Button className={`${classes.sitter}`}>Become a sitter</Button>
        </Link>
        <Link>
          <Button variant="outlined" className={`${classes.login} ${classes.button}`}>
            Login
          </Button>
        </Link>
        <Link className={classes.link}>
          <Button
            color="inherit"
            className={`${classes.signup} ${classes.button}`}
            variant="contained"
            disableElevation
          >
            Sign Up
          </Button>
        </Link>
      </Box>
      <Box width="100%" maxWidth={450} p={3} alignSelf="center">
        <Grid container>
          <Grid item xs>
            {/* <Typography className={classes.welcome} component="h1" variant="h5">
              Welcome back!
            </Typography> */}
          </Grid>
        </Grid>
      </Box>
      <Box p={1} alignSelf="center" />
    </Box>
  );
}
