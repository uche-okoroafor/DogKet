import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ProfileSideBar from './ProfileSideBar/ProfileSideBar';
import useStyles from './useStyles';
import Layout from '../Layout/Layout';

interface Props {
  children?: React.ReactNode;
}

const Profile = ({ children }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container className={classes.profile}>
        <ProfileSideBar />
        {children ? (
          children
        ) : (
          <Grid item xs={12} sm={9}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              className={classes.tempProfileMainSection}
            >
              <Typography component="h5" variant="h5" align="center">
                Profile Page Template
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
};

export default Profile;
