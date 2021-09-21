import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection="column"
          minHeight="100vh"
          className={classes.authWrapper}
        >
          <AuthHeader asideText="Become a sitter" linkTo="/login" />
          <Box className={classes.signupOuterContainer} width="100%" maxWidth={600} p={3} alignSelf="center">
            <Grid className={classes.signupContainer} container elevation={6} component={Paper}>
              <Grid item xs>
                <Typography className={classes.welcome} component="h1" variant="h5">
                  Sign Up
                </Typography>
              </Grid>
              <SignUpForm handleSubmit={handleSubmit} />
              <Box display="flex" justifyContent="space-between" alignItems="center" width="170px" margin="20px auto">
                <Typography className={classes.alreadyMember} component="p" variant="body1">
                  Already a member?
                </Typography>
                <Typography component={Link} to="/login" className={classes.loginText} variant="body1">
                  Login
                </Typography>
              </Box>
            </Grid>
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
