import { Message } from './Message';
import { User } from './User';

export interface Conversation {
  _id: string;
  user1: User;
  user2: User;
  otherUser: User;
  messages: Message[];
  latestMessage: Message;
  createdAt: string;
  updatedAt: string;
}
