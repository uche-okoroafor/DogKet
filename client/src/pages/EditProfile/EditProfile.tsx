import React, { useState, useEffect } from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Container,
  Paper,
  Box,
} from '@material-ui/core';
import useStyles from './useStyles';
import { FormikHelpers, useFormik } from 'formik';
import * as yup from 'yup';
import createUpdateProfile, { IProfile } from '../../helpers/APICalls/createProfile';
import { useSnackBar } from '../../context/useSnackbarContext';

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phone: yup.string(),
  address: yup.string().required('Address is required'),
  description: yup.string().required('Your description is required'),
});

export default function EditProfile(): JSX.Element {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();

  const [fetchedProfile, setFetchedProfile] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    birth: '',
    email: '',
    phone: '',
    address: '',
    description: '',
  });

  const [fetchMethod, setFetchMethod] = useState({ method: 'POST', path: `/profile` });

  useEffect(() => {
    fetch(`/profile`)
      .then((response) => response.json())
      .then((data) => {
        setFetchedProfile(data);
        setFetchMethod({ method: 'PUT', path: `/profile/update` });
      });
  }, []);

  const handleSubmit = (
    { firstName, lastName, email, phone, address, gender, birth, description }: IProfile,
    { setSubmitting }: FormikHelpers<IProfile>,
  ) => {
    createUpdateProfile(
      firstName,
      lastName,
      email,
      phone,
      address,
      gender,
      birth,
      description,
      fetchMethod.method,
      fetchMethod.path,
    ).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else {
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  //  To change the style of entering phone number textfield from none to block
  const [block, setBlock] = useState('none');

  const formik = useFormik({
    initialValues: fetchedProfile,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const handleClick = () => {
    setBlock('block');
  };

  return (
    <Container component="main" className={classes.main}>
      <CssBaseline />
      <Grid container>
        <Grid item md={8} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography variant="h4" className={classes.title}>
              Edit Profile
            </Typography>
            <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
              <Box className={classes.box}>
                <label htmlFor="first-name" className={classes.label}>
                  first name
                </label>
                <TextField
                  type="text"
                  id="first-name"
                  placeholder="john"
                  variant="outlined"
                  name="firstName"
                  className={classes.textField}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  onBlur={formik.handleBlur}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="last-name" className={classes.label}>
                  last name
                </label>
                <TextField
                  type="text"
                  id="last-name"
                  placeholder="Doe"
                  variant="outlined"
                  className={classes.textField}
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  onBlur={formik.handleBlur}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="select-outlined" className={classes.label}>
                  gender
                </label>
                <FormControl variant="outlined">
                  <Select
                    labelId="select-outlined-label"
                    id="select-outlined"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    className={classes.select}
                  >
                    <MenuItem value={'male'}>Male</MenuItem>
                    <MenuItem value={'female'}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box className={classes.box}>
                <label htmlFor="birth-date" className={classes.label}>
                  birth date
                </label>
                <TextField
                  type="date"
                  id="birth-date"
                  variant="outlined"
                  className={classes.textField}
                  name="birth"
                  value={formik.values.birth}
                  onChange={formik.handleChange}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="email-address" className={classes.label}>
                  email address
                </label>
                <TextField
                  type="email"
                  id="email-address"
                  placeholder="john-doe@gmail.com"
                  variant="outlined"
                  className={classes.textField}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onBlur={formik.handleBlur}
                />
              </Box>
              <Box className={classes.box} style={{ display: `${block}` }}>
                <label className={classes.label}></label>
                <TextField
                  type="text"
                  placeholder="Enter phone number"
                  variant="outlined"
                  className={classes.textField}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="phone-number" className={classes.label}>
                  phone number
                </label>
                <Box className={classes.boxStyle}>
                  <Typography className={classes.phone}>No Phone number entered</Typography>
                  <Button variant="outlined" color="secondary" size="large" onClick={handleClick}>
                    Add phone number
                  </Button>
                </Box>
              </Box>
              <Box className={classes.box}>
                <label htmlFor="where-live" className={classes.label}>
                  where you live
                </label>
                <TextField
                  type="text"
                  id="where-live"
                  placeholder="Address"
                  variant="outlined"
                  className={classes.textField}
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                  onBlur={formik.handleBlur}
                />
              </Box>
              <Box className={classes.box}>
                <label htmlFor="describe" className={classes.label}>
                  describe your self
                </label>
                <TextField
                  id="describe"
                  placeholder="About you"
                  variant="outlined"
                  className={classes.textField}
                  multiline
                  rows={6}
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                  onBlur={formik.handleBlur}
                />
              </Box>
              <Button variant="contained" color="secondary" size="large" className={classes.button} type="submit">
                save
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
