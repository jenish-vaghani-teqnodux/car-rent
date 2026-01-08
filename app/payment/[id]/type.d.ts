interface IPaymentCartProps {
  heading: {
    title: string;
    description: string;
    step: {
      currentStep: number;
      totalSteps: number;
    };
  };
  children: React.ReactNode;
  isLoading?: boolean;
}
type LocationInfo = {
  location: string;
  date: string;
  time: string;
};

type PaymentInfo = {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  pickup: LocationInfo;
  dropoff: LocationInfo;
  cardNumber: string;
  exprationDate: string;
  cardHolder: string;
  cvc: string;
  marketingConsent: boolean;
  termsAccepted: boolean;
  rating: number | null;
  promoCode?: string;
};

interface IPaymentInfoProps {
  paymentInfo: PaymentInfo;
  setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>;
  onClick?: any;
  data?: IPaymentApi;
  isLoading?: boolean;
}
