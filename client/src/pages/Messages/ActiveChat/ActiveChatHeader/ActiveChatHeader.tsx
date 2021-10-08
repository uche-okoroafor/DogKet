import { AppBar, Toolbar, Box, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import OtherUserAvatar from '../../../../components/OtherUserAvatar/OtherUserAvatar';
import useStyles from './useStyles';

interface Props {
  fullName: string;
  profileImg?: string;
  isOnline: boolean;
}

const ActiveChatHeader = ({ fullName, profileImg, isOnline }: Props): JSX.Element => {
  const classes = useStyles();

  const activeChatHeaderContents = (
    <Box className={classes.activeChatHeader}>
      <Box className={classes.content}>
        <OtherUserAvatar small={false} isOnline={isOnline} fullName={fullName} profileImg={profileImg} />
        <Typography variant="h5" className={classes.username}>
          {fullName}
        </Typography>
      </Box>
      <MoreHorizIcon classes={{ root: classes.ellipsis }} />
    </Box>
  );

  return (
    <>
      {activeChatHeaderContents}

      <AppBar className={classes.mobileActiveChatHeader}>
        <Toolbar>{activeChatHeaderContents}</Toolbar>
      </AppBar>
    </>
  );
};

export default ActiveChatHeader;
