import { useState, SyntheticEvent } from 'react';
import { Box, InputBase, Autocomplete } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { Sitter, sampleData } from '../../Profile/ProfileDetail/sampleData';
import useStyles from './useStyles';

interface Props {
  search: string;
  handleChange: (event: SyntheticEvent<Element, Event>, newInputValue: string) => void;
}

const SearchLocation = ({ search, handleChange }: Props): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // this will be used when implementing search functionality
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [options, setOptions] = useState<Sitter[]>([]);
  // this will be used when implementing search functionality
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);

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
        getOptionLabel={(option) => option.sitterCity}
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
