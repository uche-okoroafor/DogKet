import { Box, Badge, Avatar } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  username: string;
  profileImg?: string;
  isInChatBox: boolean;
  isOnline: boolean;
}

const OtherUserAvatar = ({ username, profileImg, isInChatBox, isOnline }: Props): JSX.Element => {
  const classes = useStyles();

  const badgeStyles = (isOnline: boolean): string => {
    if (isOnline) {
      return `${isInChatBox ? classes.onlineBadge : classes.onlineActiveChatBadge}`;
    } else {
      return '';
    }
  };

  return (
    <Box className={classes.avatar}>
      <Badge
        classes={{ badge: badgeStyles(isOnline) }}
        variant="dot"
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Avatar
          alt={username}
          src={profileImg}
          className={`${isInChatBox ? classes.profilePic : classes.activeChatPic}`}
        />
      </Badge>
    </Box>
  );
};

export default OtherUserAvatar;
