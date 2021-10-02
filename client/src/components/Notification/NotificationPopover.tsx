import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import tempImage from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import useStyles from './NotificationStyles/NotificationMessages';
import NotificationMessages from './NotificationMessages';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { getNotifications, updReadNotifications } from '../../helpers/APICalls/notifications';
import { Notification, NotificationApiData, NotificationApiDataSuccess } from '../../interface/Notifications';
import { BrowserRouter as Router, Route, Link, useParams, useLocation, NavLink } from 'react-router-dom';

export default function NotificationPopover() {
  const classes = useStyles();
  const returnNotificationType = (res: any): Notification[] => res.notifications;
  const messages: Notification[] = [];
  const [messagesToShow, setmessagesToShow] = React.useState(messages);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await getNotifications(1, 3, true);
      const messagesCopy = returnNotificationType(res);
      if (messagesCopy) setmessagesToShow(messagesCopy);

      if (messagesCopy.length > 0) {
        const notificationsIds = messagesCopy.map((notifs) => notifs._id);
        console.log(res, notificationsIds);
        const updateRes = await updReadNotifications(notificationsIds);
        if (updateRes) console.log(updateRes);
      }
    };
    fetchNotifications();

    // const updateRead = async () => {
    //   const messagesCopy = messagesToShow.notifications;
    //   const notificationsIds = messagesCopy.map((notifs) => notifs._id);
    //   console.log(messagesCopy, notificationsIds);
    //   const res = await updReadNotifications(notificationsIds);
    //   if (res) console.log(res);
    // };
    // updateRead();
  }, []);

  return (
    <Box className={`${classes.root} ${classes.popoverWrap}`}>
      <Paper className={classes.paper}>
        {messagesToShow.length < 1 ? (
          <Box>
            <Typography variant="subtitle1" className={classes.title}>
              No unread notifications.
            </Typography>
          </Box>
        ) : (
          <NotificationMessages messagesToShow={messagesToShow} />
        )}
        <Box className={classes.footerWrap}>
          <Button component={NavLink} to={'/notifications'}>
            Show all notifications
            <OpenInNewIcon />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
