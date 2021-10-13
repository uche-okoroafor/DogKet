import { KeyboardEvent, MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListIcon from '@material-ui/icons/List';
import useStyles from './useStyles';

const sideBarMenus = [
  { menuItem: 'Edit Profile', linkTo: '/profile/edit' },
  { menuItem: 'Profile Photo', linkTo: '/profile/photo' },
  { menuItem: 'Availability', linkTo: '/profile/availability' },
  { menuItem: 'Payment', linkTo: '/profile/payment' },
  { menuItem: 'Security', linkTo: '/profile/security' },
  { menuItem: 'Settings', linkTo: '/profile/settings' },
];

const ProfileSideBar = (): JSX.Element => {
  const classes = useStyles();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setSideBarOpen(open);
  };

  const menuList = (
    <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List className={classes.menuList}>
        {sideBarMenus.map((menu, index) => (
          <ListItem button key={index} component={NavLink} to={menu.linkTo} activeClassName={classes.activeMenu}>
            {menu.menuItem}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Grid item sm={3} className={classes.sideBarDesktop}>
        {menuList}
      </Grid>
      <Box className={classes.sideBarMobile}>
        <Button className={classes.profileMenuBtn} onClick={toggleDrawer(true)}>
          <ListIcon />
          Profile Menus
        </Button>
        <SwipeableDrawer
          className={classes.profileSideBar}
          open={sideBarOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {menuList}
        </SwipeableDrawer>
      </Box>
    </>
  );
};

export default ProfileSideBar;
