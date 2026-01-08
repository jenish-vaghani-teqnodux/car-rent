interface ILineSkeletonProps {
  className?: string;
  variant?: "primary" | "secondary";
}

interface ICartSkeletonProps {
  varient?: "compact" | "detailed";
}

interface IPaymentCartSkeletonProps {
  currentStep: number;
  totalSteps: number;
}
