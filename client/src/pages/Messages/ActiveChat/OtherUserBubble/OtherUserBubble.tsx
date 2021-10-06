import { Box, Paper, Typography } from '@material-ui/core';
import { User } from '../../../../interface/User';
import OtherUserAvatar from '../../../../components/OtherUserAvatar/OtherUserAvatar';
import useStyles from './useStyles';

interface Props {
  text: string;
  otherUser: User;
}

const OtherUserBubble = ({ text, otherUser }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.otherUserBubbleBox}>
      <OtherUserAvatar
        small={true}
        username={otherUser.username}
        profileImg={otherUser.profileImg}
        customClasses={classes.otherUserAvatar}
      />
      <Paper elevation={1} className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Paper>
    </Box>
  );
};

export default OtherUserBubble;
