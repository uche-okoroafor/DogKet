import { Grid, Box, Avatar, Typography, Paper, ImageList, ImageListItem } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Profile } from '../../../../interface/Profile';
import useStyles from './useStyles';

interface Props {
  sitter: Profile;
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
              // Assume photos[0] is always a background image source displayed in ProfileDetail
              src={sitter.photos[0]}
              alt="profile-detail-bg-image"
            />
            <Avatar
              variant="circular"
              className={classes.avatar}
              // Assume photos[1] is always an avatar image source of a sitter
              src={sitter.photos[1]}
              alt={`${sitter.firstName}-${sitter.lastName}-profile-image`}
            />
            <Typography component="h5" variant="h5" align="center" className={classes.sitterName}>
              {`${sitter.firstName} ${sitter.lastName}`}
            </Typography>
            <Typography component="p" variant="body1" align="center" className={classes.sitterShortDesc}>
              {sitter.title}
            </Typography>
            <Box
              width="250px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              className={classes.sitterLocation}
            >
              <LocationOnIcon className={classes.locationIcon} />
              <Typography component="p" variant="body1" align="center" className={classes.sitterLocationText}>
                {sitter.address}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.profileDetailBottom}>
            <Typography component="h6" variant="h6" className={classes.aboutMeTitle}>
              About me
            </Typography>
            <Typography component="p" variant="body1" className={classes.aboutMeDesc}>
              {sitter.description}
            </Typography>
            <ImageList className={classes.imageList} rowHeight={125}>
              {/* Assume from photos[2] to photos[lastIndex] are always pet images for ProfileDetail Page */}
              {sitter.photos.slice(2).map((image: string) => (
                <ImageListItem key={image}>
                  <img
                    className={classes.imageItem}
                    src={`${image}?w=125&h=125&fit=crop&auto=format`}
                    alt={`pet-image-${image}`}
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
