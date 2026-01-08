import React from "react";

const SliderSkeleton = () => {
  return (
    <div className="">
      {/* Slider Track */}
      <div className="relative w-full h-4 rounded-full bg-[#EEF2FF] overflow-hidden">
        {/* Filled Part */}
        <div className="absolute left-0 top-0 h-full w-[65%] bg-[#8FA8F8] rounded-full" />

        {/* Thumb */}
        <div className="absolute left-[62%] top-1/2 -translate-y-1/2 w-6 h-6 bg-[#8FA8F8] rounded-full border-4 border-white shadow-md" />
      </div>

      {/* Price text skeleton */}
      {/* <div className="h-5 w-36 bg-gray-200 rounded animate-pulse" /> */}
    </div>
  );
};

export default SliderSkeleton;
