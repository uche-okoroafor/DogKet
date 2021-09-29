import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  activeChatMessages: {
    overflow: 'auto',
    flexGrow: 1,
    padding: theme.spacing(1, 3, 3),
  },
}));

export default useStyles;
