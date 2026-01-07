import PaymentCartSkeleton from "@/components/shared/PaymentCartSkeleton";
import React from "react";

const PaymentCart: React.FC<IPaymentCartProps> = ({
  heading,
  children,
  isLoading,
}) => {
  const { title, description } = heading;
  const { currentStep, totalSteps } = heading.step;
  return (
    <div className="bg-card p-6 w-full rounded-xl space-y-6">
      {/* Card title */}
      {isLoading ? (
        <PaymentCartSkeleton
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
      ) : (
        <div className="flex justify-between items-center">
          <h1>
            <p className="text-heading text-[16px] sm:text-[20px] font-bold">
              {title}
            </p>
            <span className="text-muted text-sm font-semibold">
              {description}
            </span>
          </h1>
          <span className="text-muted text-sm font-semibold min-w-fit">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
      )}
      {children}
    </div>
  );
};

export default PaymentCart;
