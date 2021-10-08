import { Button, TextField, CircularProgress } from '@material-ui/core';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useConvo } from '../../../../context/useConvoContext';
import useStyles from './useStyles';

interface Props {
  conversationId: string;
  recipientProfileId: string;
}

const InputMessage = ({ conversationId, recipientProfileId }: Props): JSX.Element => {
  const classes = useStyles();
  const { sendMessageContenxt } = useConvo();

  const handleSubmit = async (
    values: { conversationId: string; text: string; recipientProfileId: string; recipientRead: boolean },
    {
      setSubmitting,
      resetForm,
    }: FormikHelpers<{
      conversationId: string;
      text: string;
      recipientProfileId: string;
      recipientRead: boolean;
    }>,
  ) => {
    await sendMessageContenxt(values);
    setSubmitting(false);
    resetForm({
      values: {
        conversationId,
        text: '',
        recipientProfileId,
        recipientRead: false,
      },
    });
  };

  return (
    <Formik
      initialValues={{
        conversationId,
        text: '',
        recipientProfileId,
        recipientRead: false,
      }}
      validationSchema={Yup.object().shape({ text: Yup.string().required('Text is required') })}
      onSubmit={handleSubmit}
      enableReinitialize
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
