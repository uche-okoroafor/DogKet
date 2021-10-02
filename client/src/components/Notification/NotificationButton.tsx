import * as React from 'react';
import { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from './NotificationStyles/NotificationButton';
import Box from '@mui/material/Box';
import NotificationPopover from './NotificationPopover';
import { getNotifications, updReadNotifications } from '../../helpers/APICalls/notifications';
import { Notification, NotificationApiData, NotificationApiDataSuccess } from '../../interface/Notifications';

export default function NotificationButton() {
  const classes = useStyles();
  // const messages: Notification[] = [];
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  // const [messagesToShow, setmessagesToShow] = React.useState<NotificationApiData | Notification[]>(messages);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!anchorEl) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log('openkkk');
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // const returnNotificationType = (res: any): Notification[] => res.notifications;

  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     const res = await getNotifications(1, 3, null);
  //     if (res) setmessagesToShow(res);

  //     const messagesCopy = returnNotificationType(res);
  //     const notificationsIds = messagesCopy.map((notifs) => notifs._id);
  //     console.log(res, notificationsIds);
  //     const updateRes = await updReadNotifications(notificationsIds);
  //     if (updateRes) console.log(updateRes);
  //   };
  //   fetchNotifications();

  //   // const updateRead = async () => {
  //   //   const messagesCopy = messagesToShow.notifications;
  //   //   const notificationsIds = messagesCopy.map((notifs) => notifs._id);
  //   //   console.log(messagesCopy, notificationsIds);
  //   //   const res = await updReadNotifications(notificationsIds);
  //   //   if (res) console.log(res);
  //   // };
  //   // updateRead();
  // }, []);

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
        <NotificationPopover />
      </Popover>
    </Box>
  );
}
