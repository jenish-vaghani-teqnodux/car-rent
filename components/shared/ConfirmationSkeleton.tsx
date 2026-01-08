import React from "react";
import LineSkeleton from "./LineSkeleton";

const ConfirmationSkeleton = () => {
  return (
    <>
      {/* marketingConsent checkbox */}
      <div className="bg-page px-6 py-6 rounded-xl">
        <div className="flex items-center gap-4">
          <span className="w-5 h-5 border border-[#85A8F8] rounded-sm" />
          <LineSkeleton />
        </div>
      </div>
      {/* termsAccepted checkbox */}
      <div className="bg-page px-6 py-6 rounded-xl">
        <div className="flex items-center gap-4">
          <span className="w-5 h-5 border border-[#85A8F8] rounded-sm" />
          <LineSkeleton />
        </div>
      </div>
      {/* rent-now button */}
      <div className="pt-2">
        <button className="bg-[#3563E9] h-14! w-[140px]! sm:h-14 sm:w-[116px]  rounded-[10px]" />
      </div>
      {/* description */}
      <div className="pt-2">
        <div className="space-y-2 pt-6">
          <LineSkeleton />
          <LineSkeleton variant="secondary" />
        </div>
      </div>
    </>
  );
};

export default ConfirmationSkeleton;
