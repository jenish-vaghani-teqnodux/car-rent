import React from "react";

const PaymentPage = () => {
  return (
    <div className="w-full p-6  ">
      {/* Card */}
      <div className="bg-card p-6 w-full rounded-xl space-y-6">
        {/* Card title */}
        <div className="flex justify-between items-center">
          <h1>
            <p className="text-heading text-[16px] sm:text-[20px] font-bold">
              Billing Info
            </p>
            <span className="text-muted text-sm font-semibold">
              Please enter your billing info
            </span>
          </h1>
          <span className="text-muted text-sm font-semibold">Step 1 of 4</span>
        </div>

        {/* Fields */}
        <div className="flex justify-between gap-8">
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                Name
              </h1>
              <input
                type="text"
                className="h-14 w-full pl-6 bg-page rounded-xl outline-none focus:outline-none focus:ring-0"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                Address
              </h1>
              <input
                type="text"
                className="h-14 w-full pl-6 bg-page rounded-xl outline-none focus:outline-none focus:ring-0"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                Phone Number
              </h1>
              <input
                type="number"
                className="h-14 w-full pl-6 bg-page rounded-xl outline-none focus:outline-none focus:ring-0"
                placeholder="Phone number"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-heading text-sm sm:text-[16px] font-semibold">
                Town / City
              </h1>
              <input
                type="text"
                className="h-14 w-full pl-6 bg-page rounded-xl outline-none focus:outline-none focus:ring-0"
                placeholder="Town or city"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
