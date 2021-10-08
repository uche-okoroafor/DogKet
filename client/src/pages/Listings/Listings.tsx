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
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
        const fetchedProfiles = await getAllProfiles();
        setProfiles(fetchedProfiles);
        setLoading(false);
      };
      fetchProfiles();
    } catch (error: unknown) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
      setLoading(false);
    }
  }, [updateSnackBarMessage]);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleShowMore = () => {};

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
          <SearchLocation
            dateRange={dateRange}
            setProfiles={setProfiles}
            search={search}
            handleChange={searchLocationHandleChange}
          />
          <SearchDateRange
            search={search}
            setProfiles={setProfiles}
            dateRange={dateRange}
            handleChange={searchDateRangeHandleChange}
          />
        </Box>

        {loading && (
          <Box height="60%" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress size={100} />
          </Box>
        )}

        {!loading && profiles.length && (
          <>
            <Grid
              width="100vw"
              minHeight="calc(100vh - 196px)"
              container
              className={classes.sitterLists}
              justifyContent="space-evenly"
            >
              {profiles.map((profile: Profile) => (
                <SitterCard key={profile._id} sitter={profile} />
              ))}
            </Grid>
            <Box display="flex" justifyContent="center" alignItems="center" className={classes.showMoreBox}>
              <Button variant="outlined" onClick={handleShowMore} className={classes.showMoreBtn}>
                Show More
              </Button>
            </Box>
          </>
        )}
      </Grid>
    </Layout>
  );
};

export default Listings;
