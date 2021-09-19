import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from './useStyles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

export default function CurrentBookings() {
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
      wrapper: {
        textAlign: 'left',
        marginBottom: '15px',
      },
      nextBookHr: {
        fontWeight: 900,
        fontSize: '9px',
        color: 'black',
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
        backgroundColor: deepOrange[500],
      },
      mb5: {
        marginBottom: '15px',
      },
    }),
  );
  const currentClass = currentStyles();

  return (
    <div className={currentClass.wrapper}>
      <Paper className={currentClass.paper}>
        <Grid container spacing={2}>
          {/* <Grid item>
            <ButtonBase className={currentClass.image}>
              <img className={currentClass.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom className={currentClass.nextBookHr}>
                  YOUR NEXT BOOKING
                </Typography>
                <Typography gutterBottom variant="subtitle1" className={currentClass.nextBookSubHr}>
                  Standard license
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" className={currentClass.nextBookNameWrapper}>
                  {/* <Avatar alt="Remy Sharp" src="../../Images/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                  {/* <Avatar className={currentClass.orange}>H</Avatar> */}
                  {/* <img alt="Remy Sharp" src="/68f55f7799df6c8078a874cfe0a61a5e6e9e1687.png" /> */}
                  <div className={currentClass.tempImg}></div>
                  <div className={currentClass.nextBookNameHr}>Rebeca Smith</div>
                </Typography>
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
