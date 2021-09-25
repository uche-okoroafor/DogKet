import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chatSideBanner: {
    [theme.breakpoints.up('md')]: {
      padding: '2rem 2rem',
      width: '300px',
    },
    backgroundColor: '#fff',
  },
  userPanel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  userText: {
    fontWeight: 700,
    paddingLeft: '1rem',
    fontSize: 16,
  },
  chatTitle: {
    fontWeight: 700,
    fontSize: 20,
    margin: '1rem 0',
  },
  chatSummaryContainer: { overflowY: 'auto', marginTop: '1rem' },
  newChatBtn: {
    margin: '1rem 0',
  },
  noChatToSelectText: {
    margin: '1rem 0',
  },
}));

export default useStyles;
