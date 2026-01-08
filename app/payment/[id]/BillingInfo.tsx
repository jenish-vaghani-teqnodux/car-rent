import React, { useState } from "react";
import PaymentCart from "./PaymentCart";
import BillingInfoSkeleton from "@/components/shared/BillingInfoSkeleton";

const paymentInfo: React.FC<IPaymentInfoProps> = ({
  paymentInfo,
  setPaymentInfo,
  isLoading,
}) => {
  return (
    <PaymentCart
      heading={{
        title: "Billing Info",
        description: "Please enter your billing info",
        step: {
          currentStep: 1,
          totalSteps: 4,
        },
      }}
      isLoading={isLoading}
      children={
        <div className="flex justify-between gap-8 flex-col lg:flex-row">
          {isLoading ? (
            <BillingInfoSkeleton />
          ) : (
            <>
              <div className="space-y-4 w-full">
                {/* name */}
                <div className="space-y-2">
                  <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                    Name
                  </h1>
                  <input
                    type="text"
                    className="h-14 w-full pl-6 bg-page hover:bg-[#CED3DA]! focus:bg-[#CED3DA]! rounded-xl outline-none focus:outline-none focus:ring-0"
                    placeholder="Your name"
                    onChange={(e) =>
                      setPaymentInfo({ ...paymentInfo, name: e.target.value })
                    }
                    value={paymentInfo.name}
                  />
                </div>
                {/* address */}
                <div className="space-y-2">
                  <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                    Address
                  </h1>
                  <input
                    type="text"
                    className="h-14 w-full pl-6 bg-page hover:bg-[#CED3DA]! focus:bg-[#CED3DA]! rounded-xl outline-none focus:outline-none focus:ring-0"
                    placeholder="Address"
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        address: e.target.value,
                      })
                    }
                    value={paymentInfo.name}
                  />
                </div>
              </div>
              <div className="space-y-4 w-full">
                {/* phone number */}
                <div className="space-y-2">
                  <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                    Phone Number
                  </h1>
                  <input
                    type="text"
                    className="h-14 w-full pl-6 bg-page hover:bg-[#CED3DA]! focus:bg-[#CED3DA]! rounded-xl outline-none focus:outline-none focus:ring-0"
                    placeholder="Phone number"
                    onChange={(e) =>
                      setPaymentInfo({
                        ...paymentInfo,
                        phoneNumber: e.target.value,
                      })
                    }
                    value={paymentInfo.phoneNumber}
                  />
                </div>
                {/* town/city */}
                <div className="space-y-2">
                  <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                    Town / City
                  </h1>
                  <input
                    type="text"
                    className="h-14 w-full pl-6 bg-page hover:bg-[#CED3DA]! focus:bg-[#CED3DA]! rounded-xl outline-none focus:outline-none focus:ring-0"
                    placeholder="Town or city"
                    onChange={(e) =>
                      setPaymentInfo({ ...paymentInfo, city: e.target.value })
                    }
                    value={paymentInfo.city}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      }
    />
  );
};

export default paymentInfo;
