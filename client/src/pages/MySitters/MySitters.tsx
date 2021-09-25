import { Grid, Box, Typography } from '@mui/material';
import Layout from '../Layout/Layout';

const MySitters = (): JSX.Element => {
  return (
    <Layout>
      <Grid>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography component="h5" variant="h5" align="center">
            My Sitters Page Template
          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
};

export default MySitters;
