import { ChangeEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { User } from '../../interface/User';
import Search from '../Search/Search';
import Layout from '../../pages/Layout/Layout';

interface Props {
  loggedInUser?: User;
  handleDrawerToggle?: () => void;
}

const ChatSideBanner = ({}: Props): JSX.Element => {
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
    <Layout>
      <Grid>
        <Box
          height="calc(100vh - 90px)"
          width="240px"
          display="flex"
          flexDirection="column"
          p="1rem"
          className={classes.chatSideBanner}
        >
          <Typography className={classes.chatTitle} variant="h5">
            Users
          </Typography>
          <Search search={search} handleChange={handleChange} />
        </Box>
      </Grid>
    </Layout>
  );
};

export default ChatSideBanner;
