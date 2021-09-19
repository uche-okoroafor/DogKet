import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const Profile = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.profile}>
      <Box>
        <Typography component="h5" variant="h5" align="center">
          Profile Page Template
        </Typography>
      </Box>
    </Grid>
  );
};

export default Profile;
