import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { updateAccept } from '../../helpers/APICalls/request';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    icon: {
      fontSize: '15px',
      color: 'rgb(209,209,209)',
    },
  }),
);

interface Props {
  requestId: string;
}

export default function EditButton({ requestId }: Props): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateStatus = async (status: string) => {
    console.log(status);
    const response = await updateAccept(status, requestId);
    // set state? make another get request?
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Typography onClick={handleClick}>
        <SettingsIcon className={classes.icon} />
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography} onClick={() => updateStatus('accepted')}>
          Accept
        </Typography>
        <Typography className={classes.typography} onClick={() => updateStatus('declined')}>
          Decline
        </Typography>
      </Popover>
    </div>
  );
}
