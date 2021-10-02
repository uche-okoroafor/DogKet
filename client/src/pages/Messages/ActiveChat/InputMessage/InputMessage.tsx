import { Button, TextField, CircularProgress } from '@material-ui/core';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';

interface Props {
  conversationId: string;
  recipientId: string;
}

const InputMessage = ({ conversationId, recipientId }: Props): JSX.Element => {
  const classes = useStyles();

  const handleSubmit = (
    _values: { conversationId: string; text: string; recipientId: string },
    {
      setSubmitting,
      resetForm,
    }: FormikHelpers<{
      conversationId: string;
      text: string;
      recipientId: string;
    }>,
  ) => {
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        conversationId,
        text: '',
        recipientId,
      }}
      validationSchema={Yup.object().shape({ text: Yup.string().required('Text is required') })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
        <Form onSubmit={handleSubmit} noValidate className={classes.form}>
          <TextField
            className={classes.input}
            id="text"
            fullWidth
            name="text"
            autoComplete="text"
            helperText={touched.text ? errors.text : ''}
            error={touched.text && Boolean(errors.text)}
            value={values.text}
            onChange={handleChange}
            placeholder="Send Message"
          />

          <Button type="submit" size="medium" variant="contained" color="primary" className={classes.sendBtn}>
            {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Send'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default InputMessage;
