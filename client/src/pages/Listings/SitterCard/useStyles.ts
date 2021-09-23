import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sitterCard: {},
  sitterOuterBox: {
    margin: theme.spacing(3, 'auto'),
  },
  sitterBox: {
    margin: theme.spacing(2, 0, 0),
  },
  avatar: {
    width: '100px',
    height: '100px',
    border: '5px solid #ffffff',
    '&:hover': {
      opacity: '0.8',
    },
  },
  sitterName: {
    padding: theme.spacing(1),
    fontWeight: 700,
  },
  sitterShortDesc: {
    color: '#aaa',
    fontSize: '12px',
    fontWeight: 700,
  },
  sitterAboutMe: {
    padding: theme.spacing(0, 2),
  },
  sitterLocation: {},
  sitterLocationText: {
    color: '#aaa',
    fontSize: '14px',
    fontWeight: 700,
  },
  profileDetailBottom: {
    padding: theme.spacing(2, 4),
  },
  aboutMeDesc: {
    marginBottom: theme.spacing(3),
  },
  rating: {
    margin: theme.spacing(1, 'auto'),
  },
  locationIcon: {
    color: theme.palette.primary.main,
  },
  locationWage: {
    borderTop: '1px solid #ccc',
    padding: theme.spacing(1, 2, 0),
    margin: theme.spacing(2),
  },
  locationText: {
    color: '#aaa',
    fontSize: '13px',
  },
  wage: {
    fontWeight: 700,
  },
}));

export default useStyles;
