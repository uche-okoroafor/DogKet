import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authMobileMenus: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  displayAuthMenus: {
    display: 'block',
  },
  menuItem: {
    textTransform: 'uppercase',
    justifyContent: 'center',
  },
}));

export default useStyles;
