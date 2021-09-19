import 'date-fns';
import useStyles from './useStyles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { deepOrange } from '@material-ui/core/colors';

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
        fontWeight: 500,
        fontSize: '12px',
        color: 'black',
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
    }),
  );
  const currentClass = currentStyles();

  return (
    <div className={currentClass.text}>
      <Paper className={currentClass.paper}>
        <Grid container spacing={2}>
          {/* <Grid item>
            <ButtonBase className={currentClass.image}>
              <img className={currentClass.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom className={currentClass.nextBookHr}>
                  CURRENT BOOKINGS
                </Typography>
              </Grid>
              <Grid item>
                <Paper variant="outlined" className={currentClass.paperOutlineWrap}>
                  <Typography gutterBottom variant="subtitle1" className={currentClass.nextBookSubHr}>
                    Standard license
                  </Typography>
                  <Typography variant="body2" className={currentClass.nextBookNameWrapper}>
                    {/* <Avatar alt="Remy Sharp" src="../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                    {/* <Avatar className={currentClass.orange}>H</Avatar> */}
                    {/* <img alt="Remy Sharp" src="/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                    <div className={currentClass.tempImg}></div>
                    <div className={currentClass.nextBookNameHr}>Rebeca Smith</div>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
