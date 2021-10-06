import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Settings = (): JSX.Element => {
  return (
    <Grid item xs={12} sm={9} elevation={6} component={Paper} square>
      <Box height="100%" display="flex" justifyContent="center" alignItems="center">
        <Typography component="h5" variant="h5" align="center">
          Settings Page Template
        </Typography>
      </Box>
    </Grid>
  );
};

export default Settings;
