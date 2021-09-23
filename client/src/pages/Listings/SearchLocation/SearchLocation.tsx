import { ChangeEvent, useState, SyntheticEvent } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Sitter } from '../../Profile/ProfileDetail/sampleData';
import useStyles from './useStyles';

interface Props {
  search: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>, newInputValue: string) => void;
}

const SearchLocation = ({ search, handleChange }: Props): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Sitter[]>([]);
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
        getOptionSelected={(option, value) => option.sitterCity === value.sitterCity}
        getOptionLabel={(option) => option.sitterCity}
        options={options}
        loading={loading}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onInputChange={handleChange}
        inputValue={search}
        noOptionsText="No Sitters Found"
        freeSolo
        renderInput={(params) => (
          <div className={classes.search}>
            <InputBase
              {...params.inputProps}
              placeholder="Search"
              classes={{
                root: classes.searchRoot,
                input: classes.searchInput,
              }}
              inputProps={{
                'aria-label': 'search',
                ref: params.InputProps.ref,
              }}
              startAdornment={
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              }
            />
          </div>
        )}
      />
    </form>
  );
};

export default SearchLocation;
