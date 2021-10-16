import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './NotificationStyles/Notifications';
import NotificationMessages from '../../components/Notification/NotificationMessages';
import { getNotifications, updReadNotifications, getCount } from '../../helpers/APICalls/notifications';
import { Notification } from '../../interface/Notifications';

export default function NotificationPopover(): JSX.Element {
  const classes = useStyles();
  const returnNotificationType = (res: any): Notification[] => res.notifications;
  const messages: Notification[] = [];
  const [messagesToShow, setmessagesToShow] = useState(messages);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const notificationRes = await getNotifications(page, 20, null);
      console.log(notificationRes);
      const messagesCopy = returnNotificationType(notificationRes);
      if (messagesCopy) setmessagesToShow(messagesCopy);

      const unreadMessages = messagesCopy.filter((notifs) => !notifs.read).map((notifs) => notifs._id);
      // if (unreadMessages.length <= 0) return;
      // await updReadNotifications(unreadMessages);
    };
    fetchNotifications();
  }, [page]);

  useEffect(() => {
    const fetchCount = async () => {
      const success = await getCount(null);
      if (success) {
        console.log(success);
        const pageLimit = 20;
        const countCalc = Math.ceil(success['count'] / pageLimit);
        setCount(countCalc);
      }
    };
    fetchCount();
  }, []);

  return (
    <Box className={`${classes.root} ${classes.pageWrap}`}>
      <Paper className={classes.paper}>
        {!messagesToShow.length ? (
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
