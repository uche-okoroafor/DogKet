import { Box, Badge, Avatar } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  username: string;
  profileImg?: string;
  small?: boolean;
  isOnline?: boolean;
  customClasses?: string;
}

const OtherUserAvatar = ({ username, profileImg, small, isOnline, customClasses }: Props): JSX.Element => {
  const classes = useStyles();

  const badgeStyles = (isOnline: boolean | undefined): string => {
    if (isOnline) {
      return `${small ? classes.onlineBadge : classes.onlineActiveChatBadge}`;
    } else {
      return '';
    }
  };

  return (
    <Box className={`${classes.avatar} ${customClasses}`}>
      <Badge
        classes={{ badge: badgeStyles(isOnline) }}
        variant="dot"
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Avatar alt={username} src={profileImg} className={`${small ? classes.profilePic : classes.activeChatPic}`} />
      </Badge>
    </Box>
  );
};

export default OtherUserAvatar;
