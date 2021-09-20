import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const EditProfile = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={9}>
      <Box className={classes.editProfile}>
        <Typography component="h5" variant="h5" align="center">
          Edit Profile Page Template
        </Typography>
      </Box>
    </Grid>
  );
};

export default EditProfile;
