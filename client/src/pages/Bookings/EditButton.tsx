import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SettingsIcon from '@material-ui/icons/Settings';
import { editButtonStyles } from './BookingStyles/EditButton';

export default function EditButton() {
  const pageClasses = editButtonStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <Typography onClick={handleClick}>
        <SettingsIcon className={pageClasses.icon} />
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
        <Typography className={pageClasses.typography}>Accept</Typography>
        <Typography className={pageClasses.typography}>Decline</Typography>
      </Popover>
    </Box>
  );
}
