import { Box } from '@material-ui/core';
import { Message } from '../../../../interface/Message';
import { User } from '../../../../interface/User';
import SenderBubble from '../SenderBubble/SenderBubble';
import OtherUserBubble from '../OtherUserBubble/OtherUserBubble';
import useStyles from './useStyles';

interface Props {
  messages: Message[];
  otherUser: User;
  userId: string;
}

const ActiveChatMessages = ({ messages, otherUser, userId }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box width="100%" className={classes.activeChatMessages}>
      {messages.map((message: Message) => {
        return message.sender === userId ? (
          <Box key={message._id}>
            <SenderBubble key={message._id} text={message.text} />
          </Box>
        ) : (
          <OtherUserBubble key={message._id} text={message.text} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default ActiveChatMessages;
