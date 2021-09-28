import { ChangeEvent, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Search from './Search/Search';
import ChatBox from './ChatBox/ChatBox';
import { User } from '../../../interface/User';
import { mockTest1Convos } from '../../../mocks/mockConversation';
import useStyles from './useStyles';

const ChatSideBanner = (): JSX.Element => {
  const [search, setSearch] = useState<string>('test');
  const [newChatUser, setNewChatUser] = useState<User | null>(null);
  const classes = useStyles();

  // React.FormEvent<FormControl & FormControlProps>)
  const handleChange = (e: ChangeEvent<HTMLInputElement>, newInputValue: string) => {
    setSearch(newInputValue);
    if (newChatUser) {
      setNewChatUser(null);
    }
  };

  return (
    <Grid item sm={4} md={3} className={classes.chatSideBanner}>
      <Box display="flex" flexDirection="column">
        <Box className={classes.chatSideBannerBox}>
          <Typography className={classes.inboxMessages} variant="h5">
            Inbox Messages
          </Typography>
          <Search search={search} handleChange={handleChange} />
        </Box>
        {mockTest1Convos.map((conversation) => (
          <ChatBox conversation={conversation} key={conversation._id} />
        ))}
      </Box>
    </Grid>
  );
};

export default ChatSideBanner;
