/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
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

export default function Pay({
  paymentProfileExist,
  handleOpenDialog,
  defaultPaymentMethodId,
  userIds,
}: any): JSX.Element {
  const { serviceRequestDetails, openDialog, handlePayDialog } = usePayment();
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);
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
    if (serviceRequestDetails && userIds) {
      const amount: any = serviceRequestDetails.serviceCharge;
      const amountInCents: any = 100 * amount;
      const response = await createPaymentIntent(amountInCents, defaultPaymentMethodId, userIds.stripeId);
      setClientSecret(response);
      console.log(clientSecret);
    }
  };

  const handleConfirmCardPayment = async (): Promise<void> => {
    const paymentMethodId: any = defaultPaymentMethodId;

    if (stripe && clientSecret) {
      try {
        const confirmation: any = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethodId,
          // confirm:true
        });
        console.log(confirmation, 100000);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDialog}
      onClose={() => handlePayDialog(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{'Your Requested Service Details'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box>
            <Typography variant="h6">Sitter: </Typography>
            <Typography>
              {' '}
              {serviceRequestDetails &&
                `${serviceRequestDetails.sitterFirstName} ${' '}${serviceRequestDetails.sitterLastName}`}
            </Typography>
          </Box>
          <Box>
            {' '}
            <Typography variant="h6"> Service Charge per hour: </Typography>
            <Typography>{serviceRequestDetails ? `$ ${serviceRequestDetails.perHourCharge}/ hour` : ''}</Typography>
          </Box>
          <Box>
            <Typography variant="h6"> Total Service hours:</Typography>
            <Typography>{serviceRequestDetails ? `${serviceRequestDetails.requestedHours} hours` : ''}</Typography>
          </Box>
          <Box>
            <Typography variant="h6"> Total Service Charge:</Typography>
            <Typography>{serviceRequestDetails ? `$ ${serviceRequestDetails.serviceCharge}` : ''}</Typography>
          </Box>

          <Box>
            <Typography
              variant={'button'}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setClientSecret(undefined);
                handlePayDialog(false);
              }}
            >
              {!paymentProfileExist ? `Add Payment Method to Continue With this Transaction` : 'Change Payment Method'}
            </Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {!paymentProfileExist ? (
          <Button autoFocus onClick={handleAddPaymentMethod}>
            Add Payment Method
          </Button>
        ) : clientSecret ? (
          <Button autoFocus onClick={handleConfirmCardPayment}>
            Confirm Payment
          </Button>
        ) : (
          <Button autoFocus onClick={handleCreatePaymentIntent}>
            Make Payment
          </Button>
        )}
        <Button
          onClick={() => {
            setClientSecret(undefined);
            handlePayDialog(false);
          }}
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
