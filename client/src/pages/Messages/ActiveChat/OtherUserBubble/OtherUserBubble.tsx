import { Box, Paper, Typography } from '@material-ui/core';
import OtherUserAvatar from '../../../../components/OtherUserAvatar/OtherUserAvatar';
import { Profile } from '../../../../interface/Profile';
import useStyles from './useStyles';

interface Props {
  text: string;
  otherUserProfile: Profile;
}

const OtherUserBubble = ({ text, otherUserProfile }: Props): JSX.Element => {
  const classes = useStyles();
  const { photos } = otherUserProfile || {};

  return (
    <Box className={classes.otherUserBubbleBox}>
      <OtherUserAvatar
        small={true}
        profileImg={!photos ? 'https://robohash.org/defaultAvatarImage.png' : photos[1]}
        customClasses={classes.otherUserAvatar}
      />
      <Paper elevation={1} className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Paper>
    </Box>
  );
};

export default OtherUserBubble;
