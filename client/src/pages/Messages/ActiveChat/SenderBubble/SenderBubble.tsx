import { Box, Paper, Typography } from '@material-ui/core';
import useStyles from './useStyles';

interface Props {
  text: string;
}

const SenderBubble = ({ text }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.senderBubbleBox}>
      <Paper elevation={1} className={classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Paper>
    </Box>
  );
};

export default SenderBubble;
