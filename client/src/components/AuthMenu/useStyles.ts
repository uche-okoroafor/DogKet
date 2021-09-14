import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authMobileMenus: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
