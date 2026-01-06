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
}
