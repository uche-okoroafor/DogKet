import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ProfileSideBar from './ProfileSideBar/ProfileSideBar';
import useStyles from './useStyles';
import Layout from '../Layout/Layout';
import TempProfileMain from './TempProfileMain/TempProfileMain';
import EditProfile from './EditProfile/EditProfile';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import Payment from './Payment/Payment';
import Security from './Security/Security';
import Settings from './Settings/Settings';

const Profile = (): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  const content = () => {
    switch (location.pathname) {
      case '/profile':
        return <TempProfileMain />;
      case '/profile/edit':
        return <EditProfile />;
      case '/profile/photo':
        return <ProfilePhoto />;
      case '/profile/payment':
        return <Payment />;
      case '/profile/security':
        return <Security />;
      case '/profile/settings':
        return <Settings />;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Grid container className={classes.profile}>
        <ProfileSideBar />
        {content()}
      </Grid>
    </Layout>
  );
};

export default Profile;
