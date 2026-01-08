import React from "react";
import LineSkeleton from "./LineSkeleton";

const ReviewsSkeleton = () => {
  return (
    <div className="flex gap-4">
      <div className="flex w-11 h-11 rounded-full border border-devider items-center justify-center">
        <div className="animate-pulse opacity-100">
          <img src="/assets/skeleton/profile.svg" className="w-6 h-6" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between space-y-2">
          <LineSkeleton className="w-[76px]! sm:w-[116px]!" />
          <LineSkeleton
            variant="secondary"
            className="w-[76px]! sm:w-[116px]!"
          />
        </div>
        <div className="flex items-center justify-between space-y-2">
          <LineSkeleton
            variant="secondary"
            className="w-[76px]! sm:w-[116px]!"
          />
          <LineSkeleton variant="primary" className="w-[76px]! sm:w-[116px]!" />
        </div>
        <div className="mt-4 pr-4 space-y-2 sm:space-y-0">
          <LineSkeleton
            variant="secondary"
            className="hidden sm:block h-[60px]! w-full! rounded-[20px]!"
          />
          <LineSkeleton
            variant="secondary"
            className="w-full! block sm:hidden"
          />
          <LineSkeleton
            variant="secondary"
            className="w-full! block sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSkeleton;
