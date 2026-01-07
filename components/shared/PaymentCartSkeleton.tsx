import React from "react";
import LineSkeleton from "./LineSkeleton";

const PaymentCartSkeleton: React.FC<IPaymentCartSkeletonProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="space-y-2">
        <LineSkeleton />
        <LineSkeleton variant="secondary" />
      </h1>
      <span className="text-[#85A8F8] text-sm font-semibold min-w-fit">
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
};

export default PaymentCartSkeleton;
