import { Box, Typography } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  username: string;
  latestMessageText: string;
}

const ChatBoxContent = ({ username, latestMessageText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" className={classes.chatBoxContent}>
      <Box className={classes.chatInfo}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography className={classes.username}>{username}</Typography>
          <Typography className={classes.smallScreenTime}>Yesterday</Typography>
        </Box>
        <Typography className={classes.previewText}>{latestMessageText}</Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end" alignItems="center" className={classes.timeInfo}>
        <Typography className={classes.receivedTime}>Yesterday</Typography>
      </Box>
    </Box>
  );
};

export default ChatBoxContent;
