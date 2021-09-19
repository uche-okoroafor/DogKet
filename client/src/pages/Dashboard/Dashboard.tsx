import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useEffect } from 'react';
import AuthHeader from '../../components/AuthHeader/AuthHeader';

interface Props {
  children: React.ReactNode;
}

export default function Dashboard({ children }: Props): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (!loggedInUser) return <CircularProgress />;

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <AuthHeader loggedInUser={loggedInUser} asideText="Become a sitter" linkTo="/profile" />
          <Box
            className={classes.dashboardOuterContainer}
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid className={classes.dashboardContainer} container elevation={6} square component={Paper}>
              <Grid item xs>
                {children}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
