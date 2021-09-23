import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { updateStatus } from '../../helpers/APICalls/request';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    icon: {
      fontSize: '15px',
      color: 'rgb(209,209,209)',
    },
    popoverWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

interface Props {
  requestId?: string;
  updateStatusState: (id: string, status: string, sectionName: string) => void;
  sectionName: string;
}

export default function EditButton({ requestId, updateStatusState, sectionName }: Props): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickHandler = async (status: string) => {
    const { success } = await updateStatus(status, requestId);
    if (success) {
      const id = success['request']._id;
      if (sectionName === 'nextBooking') updateStatusState(id, status, 'nextBooking');
      else if (sectionName == 'current bookings') updateStatusState(id, status, 'currentBookings');
      else if (sectionName == 'past bookings') updateStatusState(id, status, 'pastBookings');
      handleClose();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Typography onClick={handleClick}>
        <SettingsIcon className={classes.icon} />
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {/* I need to have access to Profile user model to know if user is a sitter to only show this to sitters */}
        <Box className={classes.popoverWrapper}>
          <Button onClick={() => onClickHandler('accepted')}>Accept</Button>
          <Button onClick={() => onClickHandler('declined')}>Decline</Button>
        </Box>
      </Popover>
    </div>
  );
}
