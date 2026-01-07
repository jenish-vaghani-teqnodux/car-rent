import React from "react";
import LineSkeleton from "./LineSkeleton";

const BillingInfoSkeleton = () => {
  return (
    <>
      <div className="space-y-4 w-full">
        {/* name */}
        <div className="space-y-2">
          <LineSkeleton />
          <div className="h-14! w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
        </div>
        {/* address */}
        <div className="space-y-2">
          <LineSkeleton />
          <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
        </div>
      </div>
      <div className="space-y-4 w-full">
        {/* phone number */}
        <div className="space-y-2">
          <LineSkeleton />
          <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
        </div>
        {/* town/city */}
        <div className="space-y-2">
          <LineSkeleton />
          <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
        </div>
      </div>
    </>
  );
};

export default BillingInfoSkeleton;
