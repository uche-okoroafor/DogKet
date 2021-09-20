import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ProfileSideBar from './ProfileSideBar/ProfileSideBar';
import useStyles from './useStyles';

interface Props {
  children?: React.ReactNode;
}

const Profile = ({ children }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.profile}>
      <ProfileSideBar />
      {children ? (
        children
      ) : (
        <Grid item xs={12} sm={9} className={classes.tempProfileMainSection}>
          <Box width="100%" display="flex" justifyContent="center" alignItems="center">
            <Typography component="h5" variant="h5" align="center">
              Temporary Profile Main Page Template
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Profile;
