/* eslint-disable prettier/prettier */
import { useState, useContext, createContext, FunctionComponent } from 'react';
import { User } from '../interface/User';
import { serviceRequestDetails } from '../interface/serviceRequestDetails';

interface PaymentProfiles {
  handleServiceRequestDetails: (serviceRequestDetails: serviceRequestDetails | undefined) => void;
  serviceRequestDetails: serviceRequestDetails | undefined;
}

export const PaymentContext = createContext<PaymentProfiles>({
  handleServiceRequestDetails: () => null,
  serviceRequestDetails: undefined,
});

export const PaymentProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [serviceRequestDetails, setServiceRequestDetails] =
    useState<PaymentProfiles['serviceRequestDetails']>(undefined);

  const handleServiceRequestDetails = (serviceRequestDetails: PaymentProfiles['serviceRequestDetails']) => {
    setServiceRequestDetails(serviceRequestDetails);
    console.log(serviceRequestDetails);
  };
  return (
    <PaymentContext.Provider value={{ handleServiceRequestDetails, serviceRequestDetails }}>
      {children}
    </PaymentContext.Provider>
  );
};

export function usePayment(): PaymentProfiles {
  return useContext(PaymentContext);
}
