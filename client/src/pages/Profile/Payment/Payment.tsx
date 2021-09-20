import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const Payment = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={9}>
      <Box className={classes.payment}>
        <Typography component="h5" variant="h5" align="center">
          Payment Page Template
        </Typography>
      </Box>
    </Grid>
  );
};

export default Payment;
