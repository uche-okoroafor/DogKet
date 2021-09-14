import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';
import Logo from '../../Images/logo.png';
import AuthMenu from '../AuthMenu/AuthMenu';
import login from '../../helpers/APICalls/login';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { demoUser } from '../../mocks/demoUser';

interface Props {
  linkTo?: string;
  asideText: string;
  btnText?: string;
}

const AuthHeader = ({ asideText }: Props): JSX.Element => {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleDemoUserLogin = () => {
    const { email, password } = demoUser;
    login(email, password).then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        console.error({ data });
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Box className={classes.authHeader}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Box p={1} className={classes.authMenus}>
        <Typography className={classes.accAside}>{asideText}</Typography>
        <Link to="/login" className={classes.link}>
          <Button className={`${classes.headerBtn} ${classes.loginBtn}`} color="primary" variant="outlined">
            LOGIN
          </Button>
        </Link>
        <Link to="/signup" className={classes.link}>
          <Button className={`${classes.headerBtn} ${classes.signupBtn}`} color="primary" variant="contained">
            SIGN UP
          </Button>
        </Link>
        <Link to="/dashboard" className={classes.link}>
          <Button
            className={`${classes.headerBtn} ${classes.loginBtn}`}
            color="primary"
            variant="outlined"
            onClick={handleDemoUserLogin}
          >
            DEMO USER LOGIN
          </Button>
        </Link>
      </Box>
      <AuthMenu />
    </Box>
  );
};

export default AuthHeader;
