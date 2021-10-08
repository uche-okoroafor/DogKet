import Box from '@material-ui/core/Box';
import useStyles from './Styles/LandingImageSide';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default function Landing(): JSX.Element {
  const classes = useStyles();

  return (
    <Box className={classes.imageSideWrapper} display={{ xs: 'none', lg: 'block' }}>
      <Box p={1} className={classes.authHeader}>
        <Link>
          <Button className={`${classes.sitter} ${classes.button}`}>Become a sitter</Button>
        </Link>
        <Link>
          <Button variant="outlined" className={`${classes.login} ${classes.button}`}>
            Login
          </Button>
        </Link>
        <Link className={classes.link}>
          <Button className={`${classes.signup} ${classes.button}`} variant="contained" color="primary">
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
