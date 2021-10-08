import { useEffect, useRef } from 'react';
import { Box } from '@material-ui/core';
import { Message } from '../../../../interface/Conversation';
import SenderBubble from '../SenderBubble/SenderBubble';
import OtherUserBubble from '../OtherUserBubble/OtherUserBubble';
import { Profile } from '../../../../interface/Profile';
import CustomProgressCircular from '../../../../components/CustomProgressCircular/CustomProgressCircular';
import useStyles from './useStyles';

interface Props {
  messages?: Message[];
  userId: string;
  otherUserProfile: Profile;
}

const ActiveChatMessages = ({ messages, userId, otherUserProfile }: Props): JSX.Element => {
  const classes = useStyles();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView(true);
    }
  }, [messages]);

  if (!messages) return <CustomProgressCircular />;

  return (
    <Box width="100%" className={classes.activeChatMessages}>
      {messages?.map((message: Message) => {
        return message?.senderProfile?.userId === userId ? (
          <Box key={message._id}>
            <SenderBubble key={message._id} text={message.text} />
          </Box>
        ) : (
          <OtherUserBubble key={message._id} text={message.text} otherUserProfile={otherUserProfile} />
        );
      })}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <Box {...({ ref: scrollRef } as any)}></Box>
    </Box>
  );
};

export default ActiveChatMessages;
