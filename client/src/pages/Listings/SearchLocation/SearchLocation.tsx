import { useState, SyntheticEvent, useEffect } from 'react';
import { Box, InputBase, Autocomplete } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { useDebounce } from 'use-debounce';
import { searchSittersByAddress } from '../../../helpers/APICalls/profiles';
import useStyles from './useStyles';

interface Props {
  search: string;
  handleChange: (event: SyntheticEvent<Element, Event>, newInputValue: string) => void;
}

const SearchLocation = ({ search, handleChange }: Props): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [debouncedSearch] = useDebounce(search, 500);

  const saveOptions = (cities: string[]) => {
    setOptions(cities);
  };

  useEffect(() => {
    let active = true;

    const searchAndSaveSitters = async () => {
      setLoading(true);
      const response = await searchSittersByAddress({
        city: debouncedSearch,
      });
      const sitterCities: string[] = [];

      if (active && response && response.length) {
        response.map((sitter) => sitterCities.push(sitter.address));
        saveOptions([...new Set(sitterCities)]);
      }
      setLoading(false);
    };

    searchAndSaveSitters();

    return () => {
      active = false;
    };
  }, [debouncedSearch]);

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
