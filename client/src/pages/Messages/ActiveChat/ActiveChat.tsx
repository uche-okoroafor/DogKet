import { Grid, Box } from '@material-ui/core';
import ActiveChatHeader from './ActiveChatHeader/ActiveChatHeader';
import InputMessage from './InputMessage/InputMessage';
import { Conversation } from '../../../interface/Conversation';
import useStyles from './useStyles';

interface Props {
  conversation: Conversation;
}

const ActiveChat = ({ conversation }: Props): JSX.Element => {
  const classes = useStyles();
  console.log(conversation);

  return (
    <Grid item sm={8} md={9} className={classes.activeChat}>
      {conversation.otherUser && conversation.otherUser._id && (
        <Box className={classes.activeChatOuterBox}>
          <ActiveChatHeader
            username={conversation.otherUser.username}
            profileImg={conversation.otherUser.profileImg}
            isOnline={true}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.chatContainer}
          >
            {/* TODO: Create 'Messages', 'SenderBubble', and 'OtherUserBubble' */}
            {/* <Messages
                messages={conversation.messages}
                otherUser={conversation.otherUser}
                userId={user.id}
              />*/}
            <InputMessage conversationId={conversation._id} recipientId={conversation.otherUser._id} />
          </Box>
        </Box>
      )}
    </Grid>
  );
};

export default ActiveChat;
