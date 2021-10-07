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

export default function Pay({ paymentProfileExist, handleOpenDialog, defaultPaymentMethodId }: any): JSX.Element {
  const [openDialog, setOpenDialog] = useState(false);
  const { serviceRequestDetails } = usePayment();
  const [clientSecret, setClientSecret] = useState<string | undefined>(undefined);
  const stripe = useStripe();

  useEffect(() => {
    if (serviceRequestDetails) handleOpenPayDialog();
  }, [serviceRequestDetails]);

  const handleOpenPayDialog = () => {
    setOpenDialog(true);
  };
  const handleClosePayDialog = () => {
    setOpenDialog(false);
  };
  const handleAddPaymentMethod = () => {
    handleClosePayDialog();
    handleOpenDialog();
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleCreatePaymentIntent = async (): Promise<void> => {
    if (serviceRequestDetails) {
      const amount: any = serviceRequestDetails.serviceCharge;
      const amountInCents: any = 100 * amount;
      const response = await createPaymentIntent(amountInCents);
      setClientSecret(response);
      console.log(clientSecret);
    }
  };

  const handleConfirmCardPayment = async (): Promise<void> => {
    const paymentMethodId: any = defaultPaymentMethodId;

    if (stripe && clientSecret) {
      const confirmation: any = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodId,
      });
      console.log(confirmation, 100000);
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openDialog}
      onClose={handleClosePayDialog}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{'Your Requested Service Details'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box>
            <Typography>Sitter: {serviceRequestDetails ? serviceRequestDetails.sitter : ''}</Typography>
          </Box>
          <Box>
            <Typography>
              Service Charge per hour: {serviceRequestDetails ? `$ ${serviceRequestDetails.perHourCharge}/ hour` : ''}
            </Typography>
          </Box>
          <Box>
            <Typography>
              Total Service hours: {serviceRequestDetails ? `${serviceRequestDetails.requestedHours} hours` : ''}
            </Typography>
          </Box>
          <Box>
            <Typography>
              Total Service Charge: {serviceRequestDetails ? `$ ${serviceRequestDetails.serviceCharge}` : ''}
            </Typography>
          </Box>

          <Box>
            <Typography variant={paymentProfileExist ? 'button' : 'h6'} onClick={handleClosePayDialog}>
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
        <Button onClick={handleClosePayDialog} autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
