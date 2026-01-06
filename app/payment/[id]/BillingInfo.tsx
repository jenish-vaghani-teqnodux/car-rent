import React, { useState } from "react";
import PaymentCart from "./PaymentCart";

const BillingInfo = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
  });
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
      children={
        <div className="flex justify-between gap-8">
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
                  setBillingInfo({ ...billingInfo, name: e.target.value })
                }
                value={billingInfo.name}
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
                  setBillingInfo({ ...billingInfo, address: e.target.value })
                }
                value={billingInfo.name}
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
                  setBillingInfo({
                    ...billingInfo,
                    phoneNumber: e.target.value,
                  })
                }
                value={billingInfo.phoneNumber}
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
                  setBillingInfo({ ...billingInfo, city: e.target.value })
                }
                value={billingInfo.city}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default BillingInfo;
