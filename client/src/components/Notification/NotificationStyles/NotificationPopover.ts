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
    image: {
      width: 60,
      height: 60,
    },
    title: {
      fontWeight: 900,
    },
    footerWrap: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    popoverWrap: {
      minWidth: '500px',
    },
  }),
);

export default useStyles;
