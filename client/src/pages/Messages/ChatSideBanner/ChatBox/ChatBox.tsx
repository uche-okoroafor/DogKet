import { Box } from '@material-ui/core/';
import { Conversation } from '../../../../interface/Conversation';
import OtherUserAvatar from '../../../../components/OtherUserAvatar/OtherUserAvatar';
import ChatBoxContent from './ChatBoxContent/ChatBoxContent';
import { useConvo } from '../../../../context/useConvoContext';
import useStyles from './useStyles';

interface Props {
  conversation: Conversation;
}

const ChatBox = ({ conversation }: Props): JSX.Element => {
  const classes = useStyles();
  const { latestMessage, otherUser } = conversation;
  const { username, profileImg } = otherUser;
  const { toggleDrawer } = useConvo();

  return (
    <Box
      height="90px"
      display="flex"
      alignItems="center"
      className={classes.chatBox}
      onClick={toggleDrawer(true, conversation)}
    >
      <OtherUserAvatar isOnline={true} small={true} username={username} profileImg={profileImg ? profileImg : ''} />
      <ChatBoxContent username={username} latestMessageText={latestMessage.text} />
    </Box>
  );
};

export default ChatBox;
