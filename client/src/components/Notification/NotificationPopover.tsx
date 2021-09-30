import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import tempImage from '../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png';
import useStyles from './NotificationStyles/NotificationMessages';
import NotificationMessages from './NotificationMessages';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default function NotificationPopover({ messagesToShow }: any) {
  const classes = useStyles();

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
          <Button>
            Show all notifications
            <OpenInNewIcon />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
