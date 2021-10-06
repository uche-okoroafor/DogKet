import { useState, SyntheticEvent, useEffect } from 'react';
import { Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import { DateRange } from '@mui/lab/DateRangePicker';
import Layout from '../Layout/Layout';
import SearchLocation from './SearchLocation/SearchLocation';
import SearchDateRange from './SearchDateRange/SearchDateRange';
import SitterCard from './SitterCard/SitterCard';
import { getAllProfiles } from '../../helpers/APICalls/profiles';
import { Profile } from '../../interface/Profile';
import { useSnackBar } from '../../context/useSnackbarContext';
import useStyles from './useStyles';

const Listings = (): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [dateRange, setDateRange] = useState<DateRange<Date | null>>([null, null]);
  const [search, setSearch] = useState<string>('');
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();

  const searchLocationHandleChange = (e: SyntheticEvent<Element, Event>, newInputValue: string) => {
    setSearch(newInputValue);
  };

  const searchDateRangeHandleChange = (newDateRange: DateRange<Date>) => {
    setDateRange(newDateRange);
  };

  useEffect(() => {
    try {
      const fetchProfiles = async () => {
        const fetchedProfiles = await getAllProfiles();
        setProfiles(fetchedProfiles);
      };
      fetchProfiles();
    } catch (error: unknown) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
    }
  }, [updateSnackBarMessage]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleShowMore = () => {};

  if (!profiles.length)
    return (
      <Layout>
        <Box height="100%" display="flex" justifyContent="center" alignItems="center">
          <CircularProgress size={100} />
        </Box>
      </Layout>
    );

  return (
    <Layout>
      <Grid height="100%" className={classes.listings}>
        <Box
          height="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.searchTitleBox}
        >
          <Typography component="h4" variant="h4" align="center" className={classes.searchTitleText}>
            Your search results
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" className={classes.searchBox}>
          <SearchLocation search={search} handleChange={searchLocationHandleChange} />
          <SearchDateRange dateRange={dateRange} handleChange={searchDateRangeHandleChange} />
        </Box>

        <Grid
          width="100vw"
          minHeight="calc(100vh - 196px)"
          container
          className={classes.sitterLists}
          justifyContent="space-evenly"
        >
          {profiles
            .filter((profile: Profile) => profile.address.toLowerCase().includes(search.toLowerCase()))
            .map((profile: Profile) => (
              <SitterCard key={profile._id} sitter={profile} />
            ))}
        </Grid>
        <Box display="flex" justifyContent="center" alignItems="center" className={classes.showMoreBox}>
          <Button variant="outlined" onClick={handleShowMore} className={classes.showMoreBtn}>
            Show More
          </Button>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Listings;
