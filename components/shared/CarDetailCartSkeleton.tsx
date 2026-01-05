import React from "react";
import LineSkeleton from "./LineSkeleton";

const CarDetailCartSkeleton = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      {/* carname, like-button, rating */}
      <div className="space-y-6 sm:space-y-12">
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <LineSkeleton />
            <img
              src={`/assets/icons/like.svg`}
              className={`flex justify-center items-center w-6 h-6`}
            />
          </div>
          <div className="flex items-center gap-2">
            <LineSkeleton variant="secondary" />
          </div>
        </div>
        {/* description */}
        <div className="mb-6 space-y-2">
          <LineSkeleton variant="secondary" className="w-full!" />
          <LineSkeleton variant="secondary" className="w-full!" />
          <LineSkeleton variant="secondary" className="w-full!" />
        </div>
      </div>
      {/* car detail */}
      <div className="space-y-6 sm:space-y-12">
        <div className="flex flex-wrap justify-between gap-2 md:gap-8">
          <div className="flex-1 space-y-2">
            <p className="flex justify-between">
              <LineSkeleton variant="secondary" className="w-[76px]!" />
              <LineSkeleton variant="primary" className="w-[76px]!" />
            </p>
            <p className="flex justify-between">
              <LineSkeleton variant="secondary" className="w-[76px]!" />
              <LineSkeleton variant="primary" className="w-[76px]!" />
            </p>
          </div>
          <div className="flex-1 space-y-2">
            <p className="flex justify-between">
              <LineSkeleton variant="secondary" className="w-[76px]!" />
              <LineSkeleton variant="primary" className="w-[76px]!" />
            </p>
            <p className="flex justify-between">
              <LineSkeleton variant="secondary" className="w-[76px]!" />
              <LineSkeleton variant="primary" className="w-[76px]!" />
            </p>
          </div>
        </div>
        {/* price and rent-now button */}
        <div className="flex items-center justify-between mt-4 sm:mt-6">
          {/* Price and Original Price */}
          <div className="space-y-2">
            <LineSkeleton variant="primary" />
            <LineSkeleton variant="secondary" />
          </div>
          <button className="h-9 w-[100px] sm:h-11 sm:w-[116px] bg-[#3563E9] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default CarDetailCartSkeleton;
