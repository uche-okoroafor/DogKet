import { Dispatch, SetStateAction, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange } from '@mui/lab/DateRangePicker';
import { searchSitters } from '../../../helpers/APICalls/profiles';
import { useSnackBar } from '../../../context/useSnackbarContext';
import useStyles from './useStyles';
import { Profile } from '../../../interface/Profile';

interface Props {
  search: string;
  dateRange: DateRange<Date | null>;
  handleChange: (newDateRange: DateRange<Date>) => void;
  setProfiles: Dispatch<SetStateAction<Profile[]>>;
}

const SearchDateRange = ({ search, setProfiles, dateRange, handleChange }: Props): JSX.Element => {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  const formattedDateRangeText = (dateRange: DateRange<Date>): string => {
    const startYear = dateRange[0]?.getFullYear();
    const startDate = dateRange[0]?.getDate();
    const startMonth = dateRange[0]?.toLocaleDateString('en-US', { month: 'short' });
    const endDate = dateRange[1]?.getDate();
    const endMonth = dateRange[1]?.toLocaleDateString('en-US', { month: 'short' });
    return `${startDate} ${startMonth} - ${endDate} ${endMonth} ${startYear}`;
  };

  useEffect(() => {
    try {
      const searchByDateRange = async () => {
        const response = await searchSitters({
          city: search,
          searchStartDate: dateRange[0]?.toISOString().split('T')[0],
          searchEndDate: dateRange[1]?.toISOString().split('T')[0],
        });
        setProfiles(response as Profile[]);
      };

      searchByDateRange();
    } catch (error: unknown) {
      if (error instanceof Error) {
        updateSnackBarMessage(error.message);
      }
    }
  }, [search, dateRange, setProfiles, updateSnackBarMessage]);

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
          <Box className={classes.dateRangeBox}>
            {!startProps.focused && !dateRange[0] && (
              <Typography className={classes.fakePlaceholder}>Choose Dates</Typography>
            )}
            <TextField
              {...startProps}
              InputProps={{
                startAdornment: <DateRangeIcon className={classes.dateRangeIcon} />,
                className: classes.startDateField,
              }}
            />
            {dateRange[0] !== null && dateRange[1] !== null && (
              <Typography className={classes.formattedDateRangeText}>{formattedDateRangeText(dateRange)}</Typography>
            )}
            <TextField {...endProps} className={classes.endDateField} />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default SearchDateRange;
