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
    image: {
      width: 60,
      height: 60,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    title: {
      fontWeight: 900,
    },
    type: {
      fontSize: '10px',
      color: 'light-grey',
    },
    date: {
      fontWeight: 900,
    },
    footerWrap: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    popoverWrap: {
      minWidth: '500px',
    },
    unread: {
      backgroundColor: 'lightgrey',
    },
    read: {
      backgroundColor: 'white',
    },
  }),
);

export default useStyles;
