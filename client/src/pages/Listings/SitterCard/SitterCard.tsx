import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@mui/material/Rating';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import { Sitter } from '../../Profile/ProfileDetail/sampleData';
import { Link } from 'react-router-dom';

interface Props {
  sitter: Sitter;
}

const SitterCard = ({ sitter }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={5} md={4}>
      <Box
        width="80%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.sitterOuterBox}
      >
        <Paper elevation={6}>
          <Box
            height="320px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className={classes.sitterBox}
          >
            <Avatar
              variant="circular"
              className={classes.avatar}
              src={sitter.userProfileImage}
              alt={`${sitter.sitterFirstName}-${sitter.sitterLastName}-profile-image`}
              component={Link}
              to={`/listings/${sitter.sitterId}`}
            />
            <Typography component="h5" variant="h5" align="center" className={classes.sitterName}>
              {`${sitter.sitterFirstName} ${sitter.sitterLastName}`}
            </Typography>
            <Typography component="h6" variant="h6" align="center" className={classes.sitterShortDesc}>
              {sitter.sitterShortDesc}
            </Typography>
            <Rating name="read-only" size="small" value={sitter.sitterRating} readOnly className={classes.rating} />
            <Typography variant="body1" align="center" className={classes.sitterAboutMe}>
              {sitter.sitterAboutMe.slice(0, 60)}
            </Typography>
            <Box
              width="95%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.locationWage}
            >
              <Box display="flex" alignItems="center">
                <LocationOnIcon className={classes.locationIcon} />
                <Typography variant="body2" className={classes.locationText}>
                  {`${sitter.sitterCity}, ${sitter.sitterProvince}`}
                </Typography>
              </Box>
              <Typography component="h6" variant="h6" align="center" className={classes.wage}>
                ${sitter.sitterWage}/hr
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default SitterCard;
