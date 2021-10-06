import { Grid, Box, SwipeableDrawer } from '@material-ui/core';
import ActiveChatHeader from './ActiveChatHeader/ActiveChatHeader';
import InputMessage from './InputMessage/InputMessage';
import ActiveChatMessages from './ActiveChatMessages/ActiveChatMessages';
import { useConvo } from '../../../context/useConvoContext';
import useStyles from './useStyles';

interface Props {
  userId: string;
}

const ActiveChat = ({ userId }: Props): JSX.Element => {
  const classes = useStyles();
  const { activeConvo, mobileOpen, toggleDrawer } = useConvo();

  const activeChatContents = (
    <>
      {activeConvo?.otherUser && activeConvo.otherUser._id && (
        <Box className={classes.activeChatOuterBox}>
          <ActiveChatHeader
            username={activeConvo.otherUser.username}
            profileImg={activeConvo.otherUser.profileImg}
            isOnline={true}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            className={classes.chatContainer}
          >
            <ActiveChatMessages messages={activeConvo.messages} otherUser={activeConvo.otherUser} userId={userId} />
            <InputMessage conversationId={activeConvo._id} recipientId={activeConvo.otherUser._id} />
          </Box>
        </Box>
      )}
    </>
  );

  return (
    <>
      <Grid item sm={8} className={classes.activeChat}>
        {activeChatContents}
      </Grid>

      <SwipeableDrawer
        className={classes.mobileActiveChat}
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false, activeConvo)}
        onOpen={toggleDrawer(true, activeConvo)}
      >
        <Box
          width="100vw"
          role="presentation"
          onClick={toggleDrawer(false, activeConvo)}
          onKeyDown={toggleDrawer(false, activeConvo)}
        >
          {activeChatContents}
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default ActiveChat;
