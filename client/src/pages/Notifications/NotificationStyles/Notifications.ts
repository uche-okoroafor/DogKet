import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      minWidth: 400,
    },
    title: {
      fontWeight: 900,
    },
    footerWrap: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    pageWrap: {
      margin: 'auto',
      maxWidth: '30%',
    },
  }),
);

export default useStyles;
