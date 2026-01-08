import React from "react";
import LineSkeleton from "./LineSkeleton";
import ReviewsSkeleton from "./ReviewsSkeleton";

const ReviewsCartSkeleton = () => {
  return (
    <div className="w-full h-full space-y-6">
      {/* Reviews heading */}
      <div className="flex gap-4 items-center">
        <LineSkeleton className="w-[76px]! sm:w-[116px]!"/>
        <span className="w-[15px] h-[15px] bg-[#85A8F8] rounded-full" />
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {Array.from({ length: 2 }).map((item, index) => (
          <ReviewsSkeleton key={index} />
        ))}
      </div>

      {/* show all button */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2">
          <span className="text-[14px] sm:text-[16px] text-muted ">
            Show All
          </span>
          <img src="/assets/icons/arrow-down.svg" />
        </button>
      </div>
    </div>
  );
};

export default ReviewsCartSkeleton;
