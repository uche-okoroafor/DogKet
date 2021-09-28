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
        <Typography className={classes.username}>{username}</Typography>
        <Typography className={classes.previewText}>{latestMessageText}</Typography>
      </Box>
      <Typography className={classes.receivedTime}>Yesterday</Typography>
    </Box>
  );
};

export default ChatBoxContent;
