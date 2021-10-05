import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hourInput: {
    width: '160px',
    [theme.breakpoints.between(426, 1440)]: {
      width: '100%',
      margin: theme.spacing(1, 0),
    },
  },
  formWrap: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  m5: {
    marginRight: '20px',
  },
  timeLabel: {
    fontWeight: 900,
    textDecoration: 'uppercase',
  },
}));

export default useStyles;
