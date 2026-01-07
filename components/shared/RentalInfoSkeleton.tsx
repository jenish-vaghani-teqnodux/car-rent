import React from "react";
import LineSkeleton from "./LineSkeleton";

const RentalInfoSkeleton = () => {
  return (
    <>
      {/* pick-up */}
      <div className="space-y-6">
        <LineSkeleton />
        <div className="flex justify-between gap-8 flex-col lg:flex-row">
          {/* location */}
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
            {/* time */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
          </div>
          <div className="space-y-4 w-full">
            {/* date */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      {/* drop-off */}
      <div className="space-y-6">
        <LineSkeleton />
        <div className="flex justify-between gap-8 flex-col lg:flex-row">
          {/* location */}
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
            {/* time */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
          </div>
          <div className="space-y-4 w-full">
            {/* date */}
            <div className="space-y-2">
              <LineSkeleton />
              <div className="h-14 w-full rounded-xl bg-[#EFF3FD] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalInfoSkeleton;
