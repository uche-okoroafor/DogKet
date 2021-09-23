import Box from '@material-ui/core/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange } from '@mui/lab/DateRangePicker';
import useStyles from './useStyles';

interface Props {
  dateRange: DateRange<Date | null>;
  handleChange: (newDateRange: DateRange<Date>) => void;
}

const SearchDateRange = ({ dateRange, handleChange }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateRangePicker
        inputFormat="dd MMM yyyy"
        disableMaskedInput={true}
        startText={null}
        endText={null}
        value={dateRange}
        onChange={handleChange}
        renderInput={(startProps, endProps) => (
          <Box>
            <TextField
              {...startProps}
              InputProps={{
                startAdornment: <DateRangeIcon className={classes.dateRangeIcon} />,
                placeholder: 'Choose Date',
              }}
            />
            <TextField
              {...endProps}
              InputProps={{
                startAdornment: <DateRangeIcon className={classes.dateRangeIcon} />,
                placeholder: 'Choose Date',
              }}
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default SearchDateRange;
