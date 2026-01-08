import React from "react";
import LineSkeleton from "./LineSkeleton";

const PaymentMethodSkeleton = () => {
  return (
    <>
      {/* credit card */}
      <div className="space-y-8 bg-page p-6 rounded-xl">
        {/* credit card */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="rounded-full w-5 h-5 bg-white border border-[#85A8F8]" />
            <LineSkeleton className="w-[72px]! sm:w-[116px]" />
          </div>
          <div>
            <LineSkeleton className="bg-white! w-[72px]! sm:w-[116px]" />
          </div>
        </div>
        <div className="flex justify-between gap-8 flex-col lg:flex-row">
          <div className="space-y-4 w-full">
            {/* card number */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
            {/* expration date */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
          </div>
          <div className="space-y-4 w-full">
            {/* card holder */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
            {/* cvc */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* paypal radio */}
      <div className="flex flex-wrap justify-between items-center bg-page px-6 py-6 rounded-xl">
        <div className="flex items-center space-x-4">
          <span className="rounded-full w-5 h-5 bg-white border border-[#85A8F8]" />
          <LineSkeleton className="w-[72px]! sm:w-[116px]" />
        </div>
        <LineSkeleton className="bg-white! w-[72px]! sm:w-[116px]" />
      </div>

      {/* bitcoin radio */}
      <div className="flex flex-wrap justify-between items-center bg-page px-6 py-6 rounded-xl">
        <div className="flex items-center space-x-4">
          <span className="rounded-full w-5 h-5 bg-white border border-[#85A8F8]" />
          <LineSkeleton className="w-[72px]! sm:w-[116px]" />
        </div>
        <LineSkeleton className="bg-white! w-[72px]! sm:w-[116px]" />
      </div>
    </>
  );
};

export default PaymentMethodSkeleton;
