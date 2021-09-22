import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const bookingStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    text: {
      textAlign: 'left',
    },
    sectionHr: {
      fontWeight: 900,
      fontSize: '9px',
      color: 'black',
      marginTop: '8px',
      textTransform: 'uppercase',
    },
    sectionWrapper: {
      marginBottom: '-10px',
    },
    BookingSubHr: {
      fontWeight: 600,
      fontSize: '12px',
      color: 'black',
      margin: '10px 0px',
    },
    bookingNameHr: {
      fontWeight: 900,
      fontSize: '13px',
    },
    nameWrapper: {
      display: 'flex',
      marginBottom: '15px',
    },
    tempImg: {
      borderRadius: '50%',
      width: '20px',
      marginRight: '10px',
      backgroundColor: 'orange',
    },
    paperOutlineWrap: {
      marginBottom: '7px',
      padding: '5px 10px',
    },
    iconWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    statusWrapper: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '8px',
      color: 'rgb(209,209,209)',
      fontWeigth: '900',
    },
    statusTxt: {
      fontSize: '10px',
      color: 'rgb(209,209,209)',
      fontWeight: 900,
    },
  }),
);
