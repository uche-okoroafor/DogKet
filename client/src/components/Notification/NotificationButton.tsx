import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from './NotificationStyles/NotificationButton';
import Box from '@mui/material/Box';
import NotificationPopover from './NotificationPopover';

export default function NotificationButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!anchorEl) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const messagesToShow = [
    {
      date: '2/10/18',
      title: 'Marry Has requested your service for two hours',
      type: 'Dog Sitting',
      img: '.../',
      _id: 1,
    },
    {
      date: '2/10/18',
      title: 'Marry Has requested you service for two hours',
      type: 'Dog Sitting',
      img: '.../',
      _id: 2,
    },
  ];

  return (
    <Box>
      <Button
        // component={NavLink}
        // to={linkTo}
        aria-describedby={id}
        onClick={handleClick}
        className={`${classes.authNavItemBtn} ${classes.authNavMobile}`}
        // activeStyle={{ color: '#ffffff' }}
        color="primary"
        variant="text"
      >
        Notification
      </Button>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleClose}
      >
        <NotificationPopover messagesToShow={messagesToShow} />
      </Popover>
    </Box>
  );
}
