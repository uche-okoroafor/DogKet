import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../Layout/Layout';
import useStyles from './useStyles';

const TempDashboardMain = (): JSX.Element => {
  // TODO: this will be used in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();

  return (
    <Layout>
      <Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography component="h5" variant="h5" align="center">
            Temporary Dashboard Main Content
          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
};

export default TempDashboardMain;
