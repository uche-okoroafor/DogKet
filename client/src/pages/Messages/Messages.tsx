import Layout from '../../pages/Layout/Layout';
import ChatSideBanner from './ChatSideBanner/ChatSideBanner';
import ActiveChat from './ActiveChat/ActiveChat';
import { mockTest1Convos } from '../../mocks/mockConversation';

const Messages = (): JSX.Element => {
  return (
    <Layout>
      <ChatSideBanner />
      <ActiveChat conversation={mockTest1Convos[0]} />
    </Layout>
  );
};

export default Messages;
