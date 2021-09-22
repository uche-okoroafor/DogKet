import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const nextBookingClasses = makeStyles((theme: Theme) =>
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
        wrapper: {
            textAlign: 'left',
            marginBottom: '15px',
        },
        sectionHr: {
            fontWeight: 900,
            fontSize: '9px',
            color: 'black',
            marginBottom: '10px',
            marginTop: '10px',
        },
        nextBookSubHr: {
            fontWeight: 600,
            fontSize: '16px',
            color: 'black',
        },
        nextBookNameHr: {
            fontWeight: 900,
            fontSize: '13px',
            color: 'black',
        },
        nextBookNameWrapper: {
            display: 'flex',
            marginBottom: '15px',
        },
        tempImg: {
            borderRadius: '50%',
            width: '20px',
            marginRight: '10px',
            backgroundColor: 'orange',
        },
        icon: {
            fontSize: '15px',
            color: 'rgb(209,209,209)',
        },
    }),
);