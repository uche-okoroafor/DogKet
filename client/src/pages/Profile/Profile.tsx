import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../Layout/Layout';
import useStyles from './useStyles';

const Profile = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();

  return (
    <Layout>
      <Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography component="h5" variant="h5" align="center">
            Profile Page Template
          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Profile;
