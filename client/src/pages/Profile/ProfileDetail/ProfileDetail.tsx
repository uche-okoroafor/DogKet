import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Layout from '../../Layout/Layout';
import { sampleData } from './sampleData';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProfileDetailCard from './ProfileDetailCard/ProfileDetailCard';
import BookingCard from './BookingCard/BookingCard';
import { Sitter } from './sampleData';
import useStyles from './useStyles';

const ProfileDetail = (): JSX.Element => {
  const classes = useStyles();
  const params: { sitterId: string } = useParams();
  const { sitterId } = params;

  const [sitter, setSitter] = useState<Sitter | null | undefined>(null);

  const getSitterInfo = (sitterId: string) => {
    return sampleData.find((sitter: Sitter) => sitter.sitterId === sitterId);
  };

  useEffect(() => {
    const sitter = getSitterInfo(sitterId);
    setSitter(sitter);
  }, [sitterId]);

  if (!sitter) return <CircularProgress />;

  return (
    <Layout>
      <Box width="100%" className={classes.outerContainer}>
        <Grid
          maxWidth="2160px"
          container
          spacing={{ xs: 0, sm: 1, md: 3, lg: 5, xl: 10 }}
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <ProfileDetailCard sitter={sitter} />
          <BookingCard sitter={sitter} />
        </Grid>
      </Box>
    </Layout>
  );
};

export default ProfileDetail;
