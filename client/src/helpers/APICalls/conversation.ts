import { ActiveConversation, Conversation, Message } from '../../interface/Conversation';
import { FetchOptions } from '../../interface/FetchOptions';

export const getAllConversations = async (): Promise<Conversation[]> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch('/conversations', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const getConversation = async (conversationId: string | undefined): Promise<ActiveConversation> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/conversations/${conversationId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const sendMessage = async (sendingMessageInfo: Message): Promise<Message> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sendingMessageInfo),
    credentials: 'include',
  };
  return await fetch('/messages/', fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
