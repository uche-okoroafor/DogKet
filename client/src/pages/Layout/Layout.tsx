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
  children?: React.ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (!loggedInUser) return <CircularProgress />;

  return (
    <Grid container component="main" className={`${classes.root} ${classes.layout}`}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection="column"
          minHeight="100vh"
          className={classes.authWrapper}
        >
          <AuthHeader loggedInUser={loggedInUser} asideText="Become a sitter" linkTo="/profile" />
          <Box
            className={classes.layoutOuterContainer}
            width="100%"
            height="calc(100vh - 90px)"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid className={classes.layoutContainer} container elevation={6} square component={Paper}>
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
