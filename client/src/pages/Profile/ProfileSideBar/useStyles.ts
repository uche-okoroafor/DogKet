import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profileSideBar: {
    '& .MuiDrawer-paperAnchorLeft': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '150px',
    },
  },
  profileMenuBtn: {
    position: 'absolute',
    top: '100px',
    right: '10px',
  },
  menuList: {
    width: '120px',
    height: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    color: '#5c5c5c',
  },
  sideBarDesktop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#eee',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  sideBarMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  activeMenu: {
    fontWeight: 700,
    color: '#000000',
  },
}));

export default useStyles;
