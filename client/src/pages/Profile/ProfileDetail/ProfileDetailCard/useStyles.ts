import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      '& .MuiPaper-rounded': {
        borderRadius: 0,
      },
    },
  },
  profileDetailBox: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  profileDetailTop: {
    position: 'relative',
  },
  profileBackgroundImg: {
    borderRadius: '5px',
  },
  avatar: {
    width: '150px',
    height: '150px',
    border: '5px solid #ffffff',
    position: 'absolute',
    top: '120px',
    left: '50%',
    marginLeft: '-75px',
    backgroundColor: '#eee',
  },
  sitterName: {
    padding: theme.spacing(10, 0, 1),
    fontWeight: 700,
  },
  sitterShortDesc: {
    color: '#aaa',
    fontSize: '14px',
    fontWeight: 700,
  },
  sitterLocation: {
    margin: '0 auto',
    padding: theme.spacing(2, 0),
  },
  locationIcon: {
    color: '#f04040',
  },
  sitterLocationText: {
    color: '#aaa',
    fontSize: '14px',
    fontWeight: 700,
  },
  profileDetailBottom: {
    padding: theme.spacing(2, 4),
  },
  aboutMeTitle: {
    fontWeight: 700,
    paddingBottom: theme.spacing(2),
  },
  aboutMeDesc: {
    marginBottom: theme.spacing(3),
  },
  imageList: {
    height: '160px',
    [theme.breakpoints.down('sm')]: {
      height: '370px',
    },
  },
  imageItem: {
    padding: theme.spacing(1),
    borderRadius: '15px',
  },
}));

export default useStyles;
