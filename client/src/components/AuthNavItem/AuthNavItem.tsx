import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

interface Props {
  isButton?: boolean;
  linkTo: string;
  asideText?: string;
  btnText?: string;
  classes: string;
  variant?: 'contained' | 'outlined' | 'text';
}

const AuthNavItem = ({ isButton, linkTo, classes, asideText, btnText, variant }: Props): JSX.Element => {
  return (
    <>
      {isButton ? (
        <Button component={Link} to={linkTo} className={classes} color="primary" variant={variant}>
          {btnText}
        </Button>
      ) : (
        <Typography className={classes} component={Link} to={linkTo}>
          {asideText}
        </Typography>
      )}
    </>
  );
};

export default AuthNavItem;
