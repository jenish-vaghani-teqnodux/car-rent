import React from "react";
import LineSkeleton from "./LineSkeleton";

const RentalSummarySkeleton = () => {
  return (
    <>
      {/* title and description */}
      <div className="space-y-2">
        <LineSkeleton />
        <LineSkeleton variant="secondary" />
      </div>

      {/* image, carName, rating and review */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="w-[148px] h-[127px] sm:w-[148px] sm:h-[104px] rounded-xl border-2 border-[#EFF3FD] flex justify-center items-center p-3">
          <div className="bg-[#EFF3FD] w-full h-full flex justify-center items-center rounded-xl">
            <img
              src="/assets/skeleton/gallery.svg"
              alt="gallery"
              className="w-10 h-10 rounded-lg"
            />
          </div>
        </div>
        <div className="space-y-2">
          <LineSkeleton />
          <LineSkeleton variant="secondary" />
        </div>
      </div>

      {/* border */}
      <span className="flex border-devider border " />

      {/* subtotal and tax */}
      <div className="space-y-2 sm:space-y-4">
        <div className="flex justify-between items-center">
          <LineSkeleton className="w-[100px]!" variant="secondary" />
          <LineSkeleton className="w-[100px]!" />
        </div>
        <div className="flex justify-between items-center">
          <LineSkeleton className="w-[100px]!" variant="secondary" />
          <LineSkeleton className="w-[100px]!" />
        </div>
      </div>

      {/* promo code */}
      <div>
        <div className="h-14! w-full rounded-2xl sm:rounded-xl bg-[#EFF3FD] animate-pulse" />
      </div>

      {/* total price */}
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <LineSkeleton className="w-[100px]! sm:w-[116px]" />
          <LineSkeleton
            variant="secondary"
            className="w-[100px]! sm:w-[116px]!"
          />
        </div>
        <button className="h-10 w-[100px] sm:h-11 sm:w-[116px] bg-[#3563E9] rounded-md" />
      </div>
    </>
  );
};

export default RentalSummarySkeleton;
