import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authMenuDesktop: {
    [theme.breakpoints.down(600)]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accAside: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 700,
    textAlign: 'center',
    marginRight: 35,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    [theme.breakpoints.down(600)]: {
      display: 'none',
    },
    [theme.breakpoints.down(769)]: {
      marginRight: 12,
    },
  },
  authNavItemBtn: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 900,
    marginRight: 35,
    textDecoration: 'none',
  },
  authNavMobile: {
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
  },
  headerBtn: {
    width: 140,
    height: 45,
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'none',
    marginRight: 12,
    textTransform: 'uppercase',
  },
  loginBtn: {
    backgroundColor: '#ffffff',
    color: theme.palette.primary.main,
  },
  signupBtn: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
  },
}));

export default useStyles;
