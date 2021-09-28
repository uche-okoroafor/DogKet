import { Box, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import OtherUserAvatar from '../../ChatSideBanner/ChatBox/OtherUserAvatar/OtherUserAvatar';
import useStyles from './useStyles';

interface Props {
  username: string;
  profileImg?: string;
  isOnline: boolean;
}

const ActiveChatHeader = ({ username, profileImg, isOnline }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.activeChatHeader}>
      <Box className={classes.content}>
        <OtherUserAvatar isInChatBox={false} isOnline={isOnline} username={username} profileImg={profileImg} />
        <Typography className={classes.username}>{username}</Typography>
      </Box>
      <MoreHorizIcon classes={{ root: classes.ellipsis }} />
    </Box>
  );
};

export default ActiveChatHeader;
