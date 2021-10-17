import { useState, SyntheticEvent, useEffect, Dispatch, SetStateAction } from 'react';
import { Box, InputBase, Autocomplete } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { useDebounce } from 'use-debounce';
import { searchSitters } from '../../../helpers/APICalls/profiles';
import useStyles from './useStyles';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { Profile } from '../../../interface/Profile';
import { DateRange } from '@mui/lab/DateRangePicker';

interface Props {
  search: string;
  dateRange: DateRange<Date | null>;
  handleChange: (event: SyntheticEvent<Element, Event>, newInputValue: string) => void;
  setProfiles: Dispatch<SetStateAction<Profile[]>>;
}

const SearchLocation = ({ dateRange, setProfiles, search, handleChange }: Props): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearch] = useDebounce(search, 500);
  const { updateSnackBarMessage } = useSnackBar();

  const saveOptions = (cities: string[]) => {
    setOptions(cities);
  };

  useEffect(() => {
    let active = true;
    try {
      const searchAndSaveSitters = async () => {
        setLoading(true);
        const response = await searchSitters({
          city: debouncedSearch,
          searchStartDate: dateRange[0]?.toISOString().split('T')[0],
          searchEndDate: dateRange[1]?.toISOString().split('T')[0],
        });
        setProfiles(response as Profile[]);

        const sitterCities: string[] = [];

        if (active && response && (response as Profile[]).length) {
          (response as Profile[]).map((sitter) => sitterCities.push(sitter.address));
          saveOptions([...new Set(sitterCities)]);
        }
        setLoading(false);
      };

      searchAndSaveSitters();
    } catch (error: unknown) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
    }

    return () => {
      active = false;
    };
  }, [dateRange, debouncedSearch, setProfiles, updateSnackBarMessage]);

  return (
    <form
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();
      }}
    >
      <Autocomplete
        id="asynchronous-search-location"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionLabel={(option) => option}
        options={options}
        loading={loading}
        onInputChange={handleChange}
        inputValue={search}
        noOptionsText="No Sitters Found"
        freeSolo
        renderInput={(params) => (
          <Box width="300px" height="56px" className={classes.search}>
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              placeholder="Search"
              classes={{
                root: classes.searchRoot,
                input: classes.searchInput,
              }}
              startAdornment={<SearchIcon className={classes.searchIcon} />}
            />
          </Box>
        )}
      />
    </form>
  );
};

export default SearchLocation;
