import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import useStyles from './NotificationStyles/Notifications';
import NotificationMessages from '../../components/Notification/NotificationMessages';
import { BrowserRouter as Router, Route, Link, useParams, useLocation } from 'react-router-dom';
import { getNotifications, updReadNotifications, getCount } from '../../helpers/APICalls/notifications';
import { Notification, NotificationApiData, NotificationApiDataSuccess } from '../../interface/Notifications';

export default function NotificationPopover() {
  const classes = useStyles();
  const returnNotificationType = (res: any): Notification[] => res.notifications;
  const messages: Notification[] = [];
  const [messagesToShow, setmessagesToShow] = React.useState(messages);
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const notificationRes = await getNotifications(page, 20, null);
      const messagesCopy = returnNotificationType(notificationRes);
      if (messagesCopy) setmessagesToShow(messagesCopy);

      // const { success } = await getCount(null);
      // if (success) setPage(success['count']);
      // console.log(success);

      const unreadMessages = messagesCopy.filter((notifs) => !notifs.read).map((notifs) => notifs._id);
      console.log(notificationRes, unreadMessages);
      if (unreadMessages.length <= 0) return;
      const updateRes = await updReadNotifications(unreadMessages);
      if (updateRes) console.log(updateRes);
    };
    fetchNotifications();
  }, [page]);

  useEffect(() => {
    const fetchCount = async () => {
      const success = await getCount(null);
      if (success) {
        const pageLimit = 20;
        const countCalc = Math.ceil(success['count'] / pageLimit);
        setCount(countCalc);
      }
      console.log(success);
    };
    fetchCount();
  }, []);

  return (
    <Box className={`${classes.root} ${classes.pageWrap}`}>
      <Paper className={classes.paper}>
        <Typography variant="subtitle1" className={classes.title}>
          Notifications.
        </Typography>
        {messagesToShow.length < 1 ? (
          <Box>
            <Typography variant="subtitle1" className={classes.title}>
              No notifications.
            </Typography>
          </Box>
        ) : (
          <>
            <NotificationMessages messagesToShow={messagesToShow} />
            <Box className={classes.footerWrap}>
              <Pagination count={count} page={page} onChange={handleChange} />
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}
