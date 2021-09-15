import { useState, MouseEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useAuth } from '../../context/useAuthContext';
import { demoUser } from '../../mocks/demoUser';
import { useSnackBar } from '../../context/useSnackbarContext';
import login from '../../helpers/APICalls/login';
import useStyles from './useStyles';

const AuthMenu = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { updateLoginContext, loggedInUser, logout } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  const handleLogin = () => {
    handleClose();
    history.push('/login');
  };

  const handleSignup = () => {
    handleClose();
    history.push('/signup');
  };

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
    <Box className={`${classes.authMobileMenus} ${location.pathname === '/dashboard' && classes.displayAuthMenus}`}>
      <IconButton aria-label="show auth menu" aria-controls="auth-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="auth-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        {loggedInUser ? (
          <MenuItem className={classes.menuItem} onClick={handleLogout}>
            Logout
          </MenuItem>
        ) : (
          <Box>
            <MenuItem className={classes.menuItem} onClick={handleLogin}>
              Login
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleSignup}>
              Sign Up
            </MenuItem>
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default AuthMenu;
