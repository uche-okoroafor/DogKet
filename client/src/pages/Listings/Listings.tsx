import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import useStyles from './useStyles';

const Listings = (): JSX.Element => {
  // TODO: this will be used in the future
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const classes = useStyles();

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
