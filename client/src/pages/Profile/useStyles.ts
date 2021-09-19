import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  profile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    margin: '1rem 0',
  },
}));

export default useStyles;
