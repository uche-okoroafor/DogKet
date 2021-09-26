import { useState, SyntheticEvent } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { DateRange } from '@mui/lab/DateRangePicker';
import Layout from '../Layout/Layout';
import SearchLocation from './SearchLocation/SearchLocation';
import SearchDateRange from './SearchDateRange/SearchDateRange';
import SitterCard from './SitterCard/SitterCard';
import { Sitter, sampleData } from '../Profile/ProfileDetail/sampleData';

const Listings = (): JSX.Element => {
  const [dateRange, setDateRange] = useState<DateRange<Date | null>>([null, null]);
  const [search, setSearch] = useState<string>('test');
  const [newSitter, setNewSitter] = useState<Sitter | null>(null);

  const searchLocationHandleChange = (e: SyntheticEvent<Element, Event>, newInputValue: string) => {
    setSearch(newInputValue);
    if (newSitter) {
      setNewSitter(null);
    }
  };

  const searchDateRangeHandleChange = (newDateRange: DateRange<Date>) => {
    setDateRange(newDateRange);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleShowMore = () => {};

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
