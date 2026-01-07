import React, { useState } from "react";
import PaymentCart from "./PaymentCart";
import RadioButton from "@/components/ui/radio-button/RadioButton";
import PaymentMethodSkeleton from "@/components/shared/PaymentMethodSkeleton";

const PaymentMethod: React.FC<IPaymentInfoProps> = ({
  paymentInfo,
  setPaymentInfo,
  isLoading,
}) => {
  return (
    <PaymentCart
      heading={{
        title: "PaymentMethod",
        description: "Please enter your payment method",
        step: {
          currentStep: 3,
          totalSteps: 4,
        },
      }}
      isLoading={isLoading}
      children={
        <div className="space-y-4">
          {isLoading ? (
            <PaymentMethodSkeleton />
          ) : (
            <>
              {/* credit card */}
              <div className="space-y-8 bg-page p-6 rounded-xl">
                {/* credit card */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/mark.svg"
                      className="w-4 h-4 animate-pulse"
                    />
                    <h2 className="text-heading text-[16px] font-medium">
                      Credit Card
                    </h2>
                  </div>
                  <div>
                    <img src="/assets/icons/visa.svg" alt="visa" />
                  </div>
                </div>
                <div className="flex justify-between gap-8 flex-col lg:flex-row">
                  <div className="space-y-4 w-full">
                    {/* card number */}
                    <div className="space-y-2">
                      <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                        Card Number
                      </h1>
                      <input
                        type="text"
                        className="h-14 w-full pl-6 bg-card hover:bg-[#CED3DA]! focus:bg-[#CED3DA]! rounded-xl outline-none focus:outline-none focus:ring-0"
                        placeholder="Card number"
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cardNumber: e.target.value,
                          })
                        }
                        value={paymentInfo.cardNumber}
                      />
                    </div>
                    {/* expration date */}
                    <div className="space-y-2">
                      <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                        Expration Date
                      </h1>
                      <input
                        type="text"
                        placeholder="DD / MM / YYYY"
                        className="h-14 w-full px-6 bg-card rounded-xl outline-none"
                        value={paymentInfo.exprationDate}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, ""); // only numbers

                          if (value.length > 8) value = value.slice(0, 8);

                          if (value.length >= 5) {
                            value =
                              value.slice(0, 2) +
                              " / " +
                              value.slice(2, 4) +
                              " / " +
                              value.slice(4);
                          } else if (value.length >= 3) {
                            value = value.slice(0, 2) + " / " + value.slice(2);
                          }

                          setPaymentInfo({
                            ...paymentInfo,
                            exprationDate: value,
                          });
                        }}
                        maxLength={14}
                      />
                    </div>
                  </div>
                  <div className="space-y-4 w-full">
                    {/* card holder */}
                    <div className="space-y-2">
                      <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                        Card Holder
                      </h1>
                      <input
                        type="text"
                        className="h-14 w-full pl-6 bg-card hover:bg-[#CED3DA]! focus:bg-[#CED3DA]! rounded-xl outline-none focus:outline-none focus:ring-0"
                        placeholder="Card holder"
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cardHolder: e.target.value,
                          })
                        }
                        value={paymentInfo.cardHolder}
                      />
                    </div>
                    {/* cvc */}
                    <div className="space-y-2">
                      <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                        CVC
                      </h1>
                      <input
                        type="text"
                        className="h-14 w-full pl-6 bg-card hover:bg-[#CED3DA]! focus:bg-[#CED3DA]! rounded-xl outline-none focus:outline-none focus:ring-0"
                        placeholder="CVC"
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cvc: e.target.value,
                          })
                        }
                        value={paymentInfo.cvc}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* paypal radio */}
              <div className="flex flex-wrap justify-between items-center bg-page px-6 py-2 rounded-xl">
                <RadioButton
                  label={
                    <h2 className="text-heading text-[16px] font-semibold">
                      PayPal
                    </h2>
                  }
                  value="paypal"
                />
                <img src="/assets/icons/paypal.svg" alt="paypal" />
              </div>

              {/* bitcoin radio */}
              <div className="flex flex-wrap justify-between items-center bg-page px-6 py-2 rounded-xl">
                <RadioButton
                  label={
                    <h2 className="text-heading text-[16px] font-semibold">
                      Bitcoin
                    </h2>
                  }
                  value="bitcoin"
                />
                <img src="/assets/icons/bitcoin.svg" alt="bitcoin" />
              </div>
            </>
          )}
        </div>
      }
    />
  );
};

export default PaymentMethod;
