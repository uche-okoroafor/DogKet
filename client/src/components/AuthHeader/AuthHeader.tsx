import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import Logo from '../../Images/logo.png';
import AuthMenu from '../AuthMenu/AuthMenu';
import { User } from '../../interface/User';
import AuthMenuDesktop from '../AuthMenuDesktop/AuthMenuDesktop';
import { useAuth } from '../../context/useAuthContext';

interface Props {
  loggedInUser?: User;
  linkTo: string;
  asideText: string;
  btnText?: string;
}

const AuthHeader = ({ asideText, linkTo }: Props): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  return (
    <Box className={classes.authHeader}>
      <Link to={loggedInUser ? '/dashboard' : '/login'}>
        <img src={Logo} alt="logo" />
      </Link>

      <Box p={1} className={classes.authMenus}>
        <AuthMenuDesktop asideText={asideText} linkTo={linkTo} />
        <AuthMenu />
      </Box>
    </Box>
  );
};

export default AuthHeader;
