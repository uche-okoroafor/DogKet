import { Box } from '@material-ui/core/';
import { Conversation } from '../../../../interface/Conversation';
import OtherUserAvatar from './OtherUserAvatar/OtherUserAvatar';
import ChatBoxContent from './ChatBoxContent/ChatBoxContent';
import useStyles from './useStyles';

interface Props {
  conversation: Conversation;
}

const ChatBox = ({ conversation }: Props): JSX.Element => {
  const classes = useStyles();
  const { latestMessage, otherUser } = conversation;
  const { username, profileImg } = otherUser;

  return (
    <Box height="90px" display="flex" alignItems="center" className={classes.chatBox}>
      <OtherUserAvatar
        isOnline={true}
        isInChatBox={true}
        username={username}
        profileImg={profileImg ? profileImg : ''}
      />
      <ChatBoxContent username={username} latestMessageText={latestMessage.text} />
    </Box>
  );
};

export default ChatBox;
