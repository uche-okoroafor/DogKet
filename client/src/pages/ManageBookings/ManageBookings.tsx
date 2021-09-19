import 'date-fns';
import useStyles from './useStyles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { deepOrange } from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';

export default function ManageBookings() {
  const classes = useStyles();
  const currentStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
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
      nextBookHr: {
        fontWeight: 900,
        fontSize: '9px',
        color: 'black',
      },
      nextBookSubHr: {
        fontWeight: 600,
        fontSize: '12px',
        color: 'black',
        margin: '10px 0px',
      },
      nextBookNameHr: {
        fontWeight: 900,
        fontSize: '13px',
      },
      nextBookNameWrapper: {
        display: 'flex',
        marginBottom: '15px',
      },
      tempImg: {
        borderRadius: '50%',
        width: '20px',
        marginRight: '10px',
        backgroundColor: deepOrange[500],
      },
      paperOutlineWrap: {
        marginBottom: '5px',
        padding: '5px',
      },
      icon: {
        fontSize: '15px',
        color: 'rgb(209,209,209)',
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
  const currentClass = currentStyles();

  return (
    <div className={currentClass.text}>
      <Paper className={currentClass.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom className={currentClass.nextBookHr}>
                  CURRENT BOOKINGS
                </Typography>
              </Grid>
              <Grid item>
                <Paper variant="outlined" className={currentClass.paperOutlineWrap}>
                  <Grid item container xs={12} sm>
                    <Grid item xs={9}>
                      <Typography gutterBottom variant="subtitle1" className={currentClass.nextBookSubHr}>
                        Standard license
                      </Typography>
                      <Typography variant="body2" className={currentClass.nextBookNameWrapper}>
                        {/* TEMP IMG tags */}
                        {/* <Avatar alt="Remy Sharp" src="../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                        <div className={currentClass.tempImg}></div>
                        <div className={currentClass.nextBookNameHr}>Rebeca Smith</div>
                      </Typography>
                    </Grid>
                    <Grid item xs={2} className={currentClass.statusWrapper}>
                      <Typography variant="subtitle1" className={currentClass.statusTxt}>
                        ACCEPTED
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Typography>
                        <SettingsIcon className={currentClass.icon} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
