// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// const useStyles = makeStyles(() => ({
//   root: {
//     minHeight: '100vh',
//     '& .MuiInput-underline:before': {
//       borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
//     },
//   },
//   welcome: {
//     fontSize: 26,
//     paddingBottom: 20,
//     color: '#000000',
//     fontWeight: 700,
//     fontFamily: "'Open Sans'",
//   },
//   none: {
//     color: 'black',
//   },
// }));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    'MuiBackdrop-root': {
      display: 'none!important',
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default useStyles;
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     background: 'lightgrey',
//     borderRadius: '50%',
//     height: '25%',
//     margin: theme.spacing(3),
//     width: '25%',
//   },
//   paper: {
//     margin: 'auto',
//     marginTop: theme.spacing(8),
//     maxWidth: '25%',
//     padding: theme.spacing(3),
//     width: '100%',
//   },
//   secondaryText: {
//     color: 'grey',
//     fontSize: '1em',
//     textAlign: 'center',
//     width: theme.spacing(20),
//   },
//   title: {
//     margin: theme.spacing(3),
//     fontWeight: 'bold',
//   },
//   uploadBtn: {
//     color: '#ef3f40',
//     fontSize: '.9em',
//     height: theme.spacing(6),
//     margin: theme.spacing(4),
//     width: theme.spacing(25),
//   },
// }));

// export default useStyles;
