import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../Layout/Layout';

const TempDashboardMain = (): JSX.Element => {
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
