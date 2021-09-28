import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './Styles/Landing';
import LandingFormSlide from './LandingFormSide';
import LandingImageSide from './LandingImageSide';
import Box from '@material-ui/core/Box';

export default function Landing(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={7} md={6} component={Paper} square>
        <LandingFormSlide />
      </Grid>
      <Grid item xs={12} sm={5} md={6} component={Paper} square>
        <Box className={classes.landingWrapper} display={{ xs: 'none', lg: 'block' }}>
          <LandingImageSide />
        </Box>
      </Grid>
    </Grid>
  );
}
