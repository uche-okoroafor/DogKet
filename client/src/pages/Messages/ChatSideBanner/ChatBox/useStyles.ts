import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chatBox: {
    outline: '1px solid #eee',
    marginBottom: '1px',
    paddingLeft: theme.spacing(2),
  },
}));

export default useStyles;
