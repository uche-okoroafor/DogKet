import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
      width: '99%',
      margin: '0 auto',
    },
  },
  dashboard: { backgroundColor: '#FFFFFF' },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
  dashboardOuterContainer: {
    height: 'calc(100vh - 90px)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  dashboardContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
