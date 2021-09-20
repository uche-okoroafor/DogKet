import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const Settings = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={9}>
      <Box className={classes.settings}>
        <Typography component="h5" variant="h5" align="center">
          Settings Page Template
        </Typography>
      </Box>
    </Grid>
  );
};

export default Settings;
