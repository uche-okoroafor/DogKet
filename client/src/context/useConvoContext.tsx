import {
  useState,
  useContext,
  createContext,
  FunctionComponent,
  useEffect,
  useCallback,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { getAllConversations, getConversation, sendMessage } from '../helpers/APICalls/conversation';
import { ActiveConversation, Conversation, Message } from '../interface/Conversation';
import produce from 'immer';

interface IConvoContext {
  conversations: Conversation[] | null | undefined;
  activeConvo: ActiveConversation | null | undefined;
  mobileOpen: boolean;
  updateConvoContext: (convos: Conversation[]) => void;
  activateChat: (convo: ActiveConversation | null | undefined) => void;
  toggleDrawer: (
    open: boolean,
    conversationId: string | undefined,
  ) => (event: KeyboardEvent | MouseEvent) => Promise<void>;
  sendMessageContenxt: (sendingMessageInfo: Message) => void;
}

export const ConvoContext = createContext<IConvoContext>({
  conversations: undefined,
  activeConvo: undefined,
  mobileOpen: false,
  updateConvoContext: () => null,
  activateChat: () => null,
  toggleDrawer: () => async () => undefined,
  sendMessageContenxt: () => null,
});

export const ConvoProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [conversations, setConversations] = useState<Conversation[] | null | undefined>();
  const [activeConvo, setActiveConvo] = useState<ActiveConversation | null | undefined>();
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateConvoContext = useCallback((convos: Conversation[]) => {
    setConversations(convos);
  }, []);

  const fetchConversations = useCallback(async () => {
    const data = await getAllConversations();
    updateConvoContext(data);
  }, [updateConvoContext]);

  const activateChat = useCallback((convo: ActiveConversation | null | undefined) => {
    setActiveConvo(convo);
  }, []);

  const toggleDrawer = useCallback(
    (open: boolean, conversationId: string | undefined) => async (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setMobileOpen(open);

      if (open) {
        const messages = await getConversation(conversationId);
        activateChat(messages);
      } else {
        activateChat(null);
      }
    },
    [activateChat],
  );

  const sendMessageContenxt = useCallback(
    async (sendingMessageInfo: Message) => {
      const sendingMessage = await sendMessage(sendingMessageInfo);
      setActiveConvo(
        produce((draft) => {
          draft.messages.push(sendingMessage);
        }),
      );
      fetchConversations();
    },
    [fetchConversations],
  );

  useEffect(() => {
    try {
      fetchConversations();
    } catch (error) {}
  }, [fetchConversations]);

  return (
    <ConvoContext.Provider
      value={{
        conversations,
        activeConvo,
        mobileOpen,
        updateConvoContext,
        activateChat,
        toggleDrawer,
        sendMessageContenxt,
      }}
    >
      {children}
    </ConvoContext.Provider>
  );
};

export function useConvo(): IConvoContext {
  return useContext(ConvoContext);
}
