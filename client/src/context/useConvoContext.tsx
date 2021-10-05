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
import { Conversation } from '../interface/Conversation';
import { mockTest1Convos } from '../mocks/mockConversation';

interface IConvoContext {
  conversations: Conversation[] | null | undefined;
  activeConvo: Conversation | null | undefined;
  mobileOpen: boolean;
  updateConvoContext: (convos: Conversation[]) => void;
  activateChat: (convo: Conversation | null | undefined) => void;
  toggleDrawer: (open: boolean, convo: Conversation | null | undefined) => (event: KeyboardEvent | MouseEvent) => void;
}

export const ConvoContext = createContext<IConvoContext>({
  conversations: undefined,
  activeConvo: undefined,
  mobileOpen: false,
  updateConvoContext: () => null,
  activateChat: () => null,
  toggleDrawer: () => () => null,
});

export const ConvoProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [conversations, setConversations] = useState<Conversation[] | null | undefined>();
  const [activeConvo, setActiveConvo] = useState<Conversation | null | undefined>();
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateConvoContext = useCallback((convos: Conversation[]) => {
    setConversations(convos);
  }, []);

  const activateChat = useCallback((convo: Conversation | null | undefined) => {
    setActiveConvo(convo);
  }, []);

  const toggleDrawer = useCallback(
    (open: boolean, convo: Conversation | null | undefined) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setMobileOpen(open);
      activateChat(convo);
    },
    [activateChat],
  );

  useEffect(() => {
    const fetchConversations = () => {
      updateConvoContext(mockTest1Convos);
    };
    fetchConversations();
  }, [updateConvoContext]);

  return (
    <ConvoContext.Provider
      value={{ conversations, activeConvo, mobileOpen, updateConvoContext, activateChat, toggleDrawer }}
    >
      {children}
    </ConvoContext.Provider>
  );
};

export function useConvo(): IConvoContext {
  return useContext(ConvoContext);
}
