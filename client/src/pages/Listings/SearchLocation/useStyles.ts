import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    height: '56px',
    lineHeight: '18px',
    width: '300px',
    border: '1px solid #ccc',
  },
  searchRoot: {
    color: 'inherit',
    width: '100%',
    height: '100%',
  },
  searchInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
    fontWeight: 600,
  },
  searchIcon: {
    color: '#f04040',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
