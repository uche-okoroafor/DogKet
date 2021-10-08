import { Box, Badge, Avatar } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './useStyles';

interface Props {
  fullName?: string;
  profileImg?: string;
  small?: boolean;
  isOnline?: boolean;
  customClasses?: string;
}

const OtherUserAvatar = ({ fullName, profileImg, small, isOnline, customClasses }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={`${classes.avatar} ${customClasses}`}>
      <Badge
        classes={{
          badge: clsx({
            [classes.onlineBadge]: isOnline && small,
            [classes.onlineActiveChatBadge]: isOnline && !small,
          }),
        }}
        variant="dot"
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Avatar alt={fullName} src={profileImg} className={`${small ? classes.profilePic : classes.activeChatPic}`} />
      </Badge>
    </Box>
  );
};

export default OtherUserAvatar;
