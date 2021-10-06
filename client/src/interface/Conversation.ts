import { Profile } from './Profile';

export interface Conversation {
  _id: string;
  user1Profile?: Profile;
  user2Profile?: Profile;
  otherUserProfile?: Profile;
  messages?: Message[];
  latestMessage?: Message;
  createdAt: string;
  updatedAt: string;
}

export interface ActiveConversation {
  conversationId?: string;
  otherUserProfile?: Profile;
  messages?: Message[];
}

export interface Message {
  _id?: string;
  senderProfile?: Profile;
  text: string;
  conversation?: string;
  conversationId?: string;
  recipientProfileId?: string;
  recipientRead: boolean;
  createdAt?: string;
  updatedAt?: string;
}
