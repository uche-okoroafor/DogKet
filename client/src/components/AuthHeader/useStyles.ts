import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  authHeader: {
    width: '100%',
    padding: theme.spacing(1, 3),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderBottom: '1px solid #eee',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  authMenus: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
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
    [theme.breakpoints.down('sm')]: {
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
