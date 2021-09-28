import { makeStyles } from '@material-ui/core/styles';

const activeChatHeaderHeight = '124px';

const useStyles = makeStyles(() => ({
  activeChat: {
    height: '100%',
  },
  activeChatOuterBox: {
    height: '100%',
  },
  chatContainer: {
    height: `calc(100% - ${activeChatHeaderHeight})`,
  },
}));

export default useStyles;
