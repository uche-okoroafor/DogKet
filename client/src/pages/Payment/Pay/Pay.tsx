/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Card,
  Grid,
  Typography,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Dialog,
  CardContent,
  Checkbox,
  useTheme,
} from '@material-ui/core';
import { usePayment } from '../../../context/usePaymentContext';
import { Box, useMediaQuery } from '@mui/material';
import { createPaymentIntent } from '../../../helpers/APICalls/payment';
import { useStripe } from '@stripe/react-stripe-js';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

export default function Pay({
  paymentProfileExist,
  handleOpenDialog,
  defaultPaymentMethodId,
  userIds,
}: any): JSX.Element {
  const { serviceRequestDetails, openDialog, handlePayDialog, handleServiceRequestDetails } = usePayment();
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const history = useHistory();

  const stripe = useStripe();

  useEffect(() => {
    if (serviceRequestDetails) handlePayDialog(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceRequestDetails]);

  const handleAddPaymentMethod = () => {
    handlePayDialog(false);
    handleOpenDialog();
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleCreatePaymentIntent = async (): Promise<void> => {
    console.log(userIds);
    if (serviceRequestDetails && userIds) {
      const amount: any = serviceRequestDetails.serviceCharge;
      const amountInCents: any = 100 * amount;
      const response = await createPaymentIntent(amountInCents, defaultPaymentMethodId, userIds.stripeId);
      setClientSecret(response);
    }
  };

  const handleConfirmCardPayment = async (): Promise<void> => {
    const paymentMethodId: any = defaultPaymentMethodId;

    if (stripe && clientSecret) {
      try {
        const confirmation: any = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethodId,
        });
        confirmation.paymentIntent.status === 'succeeded' ? setPaymentConfirmed(true) : setPaymentConfirmed(false);
      } catch (err) {}
    }
  };

  const handleCloseTransaction = (): void => {
    handleServiceRequestDetails(undefined);
    handlePayDialog(false);
    history.push('/my-sitters');
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        onClose={() => handlePayDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Your Requested Service Details'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {paymentConfirmed ? (
              <Typography style={{ fontWeight: 600 }} align="center">
                Payment was Successful
              </Typography>
            ) : (
              <Box>
                <Box style={{ marginBottom: 10 }}>
                  <Typography style={{ fontWeight: 600 }} variant="h6">
                    Sitter:{' '}
                  </Typography>
                  <Typography align="center">
                    {' '}
                    {serviceRequestDetails &&
                      `${serviceRequestDetails.sitterFirstName} ${' '}${serviceRequestDetails.sitterLastName}`}
                  </Typography>
                </Box>
                <Box style={{ marginBottom: 10 }}>
                  {' '}
                  <Typography style={{ fontWeight: 600 }} variant="h6">
                    {' '}
                    Service Charge per hour:{' '}
                  </Typography>
                  <Typography align="center">
                    {serviceRequestDetails ? `$ ${serviceRequestDetails.perHourCharge}/ hour` : ''}
                  </Typography>
                </Box>
                <Box style={{ marginBottom: 10 }}>
                  <Typography style={{ fontWeight: 600 }} variant="h6">
                    {' '}
                    Total Service hours:
                  </Typography>
                  <Typography align="center">
                    {serviceRequestDetails ? `${serviceRequestDetails.requestedHours} hours` : ''}
                  </Typography>
                </Box>
                <Box style={{ marginBottom: 10 }}>
                  <Typography style={{ fontWeight: 600 }} variant="h6">
                    {' '}
                    Total Service Charge:
                  </Typography>
                  <Typography align="center">
                    {serviceRequestDetails ? `$ ${serviceRequestDetails.serviceCharge}` : ''}
                  </Typography>
                </Box>

                <Box style={{ paddingTop: 10 }}>
                  <Typography
                    variant={'button'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setClientSecret(undefined);
                      handlePayDialog(false);
                    }}
                  >
                    {!paymentProfileExist
                      ? `Add Payment Method to Continue With this Transaction`
                      : 'Change Payment Method'}
                  </Typography>
                </Box>
              </Box>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {paymentConfirmed ? (
            <Button
              color="primary"
              style={{ margin: '0 auto' }}
              variant="outlined"
              autoFocus
              onClick={handleCloseTransaction}
            >
              OK
            </Button>
          ) : (
            <Box>
              {!paymentProfileExist ? (
                <Button color="primary" variant="outlined" autoFocus onClick={handleAddPaymentMethod}>
                  Add Payment Method
                </Button>
              ) : clientSecret ? (
                <Button autoFocus color="primary" variant="outlined" onClick={handleConfirmCardPayment}>
                  Confirm Payment
                </Button>
              ) : (
                <Button color="primary" variant="outlined" autoFocus onClick={handleCreatePaymentIntent}>
                  Make Payment
                </Button>
              )}
              <Button
                onClick={() => {
                  setClientSecret(undefined);
                  handlePayDialog(false);
                }}
                autoFocus
                color="secondary"
                variant="contained"
                style={{ marginLeft: 10 }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
