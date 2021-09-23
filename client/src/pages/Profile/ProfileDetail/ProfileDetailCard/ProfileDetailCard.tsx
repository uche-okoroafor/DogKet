import Grid from '@mui/material/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import useStyles from './useStyles';
import { petImageInfo, Sitter } from '../sampleData';

interface Props {
  sitter: Sitter;
}

const ProfileDetailCard = ({ sitter }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={7} md={7} lg={6} xl={5} className={classes.root}>
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className={classes.profileDetailBox}
      >
        <Paper elevation={6}>
          <Box className={classes.profileDetailTop}>
            <img
              className={classes.profileBackgroundImg}
              width="100%"
              height="200px"
              src={sitter.profileBackgroundImg}
              alt="profile-detail-bg-image"
            />
            <Avatar
              variant="circular"
              className={classes.avatar}
              src={sitter.userProfileImage}
              alt={`${sitter.sitterFirstName}-${sitter.sitterLastName}-profile-image`}
            />
            <Typography component="h5" variant="h5" align="center" className={classes.sitterName}>
              {`${sitter.sitterFirstName} ${sitter.sitterLastName}`}
            </Typography>
            <Typography component="h6" variant="h6" align="center" className={classes.sitterShortDesc}>
              {sitter.sitterShortDesc}
            </Typography>
            <Box
              width="250px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              className={classes.sitterLocation}
            >
              <LocationOnIcon className={classes.locationIcon} />
              <Typography component="h6" variant="h6" align="center" className={classes.sitterLocationText}>
                {`${sitter.sitterCity}, ${sitter.sitterProvince}`}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.profileDetailBottom}>
            <Typography component="h5" variant="h5" className={classes.aboutMeTitle}>
              About me
            </Typography>
            <Typography component="p" variant="body1" className={classes.aboutMeDesc}>
              {sitter.sitterAboutMe}
            </Typography>
            <ImageList className={classes.imageList} rowHeight={125}>
              {sitter.sitterPetImages.map((item: petImageInfo) => (
                <ImageListItem key={item.img}>
                  <img
                    className={classes.imageItem}
                    src={`${item.img}?w=125&h=125&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default ProfileDetailCard;
