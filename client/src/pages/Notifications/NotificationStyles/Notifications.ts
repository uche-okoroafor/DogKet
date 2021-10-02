import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      // maxWidth: 800,
      minWidth: 400,
    },
    title: {
      fontWeight: 900,
    },
    footerWrap: {
      display: 'flex',
      justifyContent: 'center',
    },
    pageWrap: {
      margin: 'auto',
      maxWidth: '30%',
    },
  }),
);

export default useStyles;
