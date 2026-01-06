import React, { useState } from "react";
import PaymentCart from "./PaymentCart";
import CheckBox from "@/components/ui/checkbox/CheckBox";

const Confirmation = () => {
  const [confirmationInfo, setConfirmationInfo] = useState({
    marketingConsent: false,
    termsAccepted: false,
  });

  return (
    <PaymentCart
      heading={{
        title: "Confirmation",
        description:
          "We are getting to the end. Just few clicks and your rental is ready!",
        step: {
          currentStep: 4,
          totalSteps: 4,
        },
      }}
      children={
        <div className="space-y-4">
          {/* marketingConsent checkbox */}
          <div className="bg-page px-6 py-2 rounded-xl">
            <CheckBox
              label={
                <h1 className="text-[#1F2544] text-[12px] sm:text-[16px] font-semibold">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </h1>
              }
              onChange={(e) =>
                setConfirmationInfo((prev) => ({
                  ...prev,
                  marketingConsent: e.target.checked,
                }))
              }
              value={confirmationInfo.marketingConsent}
            />
          </div>
          {/* termsAccepted checkbox */}
          <div className="bg-page px-6 py-2 rounded-xl">
            <CheckBox
              label={
                <h1 className="text-[#1F2544] text-[12px] sm:text-[16px] font-semibold">
                  I agree with our terms and conditions and privacy policy.
                </h1>
              }
              onChange={(e) =>
                setConfirmationInfo((prev) => ({
                  ...prev,
                  termsAccepted: e.target.checked,
                }))
              }
              value={confirmationInfo.termsAccepted}
            />
          </div>
          {/* rent-now button */}
          <div className="pt-2">
            <button className="btn-primary h-9 w-[140px]! sm:h-14 sm:w-[116px]  text-[12px] sm:text-[16px] font-medium rounded-[10px] cursor-pointer">
              Rent Now
            </button>
          </div>
          {/* description */}
          <div className="pt-2">
            <img src="/assets/icons/security.svg" alt="security" />
            <div className="space-y-1 pt-2">
              <p className="text-[#1F2544] text-[12px] sm:text-[16px] font-semibold">
                All your data are safe
              </p>
              <span className="text-muted text-sm font-semibold">
                We are using the most advanced security to provide you the best
                experience ever.
              </span>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Confirmation;
