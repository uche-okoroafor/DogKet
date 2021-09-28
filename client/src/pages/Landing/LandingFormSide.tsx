import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles/Landing';
import LandingForm from './LandingForm';
import Logo from '../../Images/logo.png';

export default function Landing(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.authWrapper}>
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
        <LandingForm />
      </Box>
      <Box p={1} alignSelf="center" />
    </Box>
  );
}
