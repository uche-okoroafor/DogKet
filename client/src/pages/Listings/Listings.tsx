import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Listings = (): JSX.Element => {
  return (
    <Layout>
      <Grid>
        <Box height="50px" display="flex" justifyContent="center" alignItems="center">
          <Typography component="h5" variant="h5" align="center">
            Temporary Listings Page
          </Typography>
        </Box>
        <Box height="50px" display="flex" justifyContent="center" alignItems="center">
          <Typography component="h5" variant="h5" align="center">
            ProfileDetails will be displayed here
          </Typography>
        </Box>
        <Box height="50px" display="flex" justifyContent="center" alignItems="center">
          {/* for testing... sitterId === test-sitter-1 */}
          <Typography component={Link} to="/listings/test-sitter-1" align="center">
            Go To TestSitter1 Profile Detail
          </Typography>
        </Box>
        <Box height="50px" display="flex" justifyContent="center" alignItems="center">
          {/* for testing... sitterId === test-sitter-2 */}
          <Typography component={Link} to="/listings/test-sitter-2" align="center">
            Go To TestSitter2 Profile Detail
          </Typography>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Listings;
