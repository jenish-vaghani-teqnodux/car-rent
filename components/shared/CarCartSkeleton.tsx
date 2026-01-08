import React from "react";
import LineSkeleton from "./LineSkeleton";

const CarCartSkeleton: React.FC<ICartSkeletonProps> = ({ varient }) => {
  return (
    <>
      <div className="flex justify-between items-start">
        {/* Car Name and Category */}
        <h1 className="space-y-2">
          <LineSkeleton variant="primary" />
          <LineSkeleton variant="secondary" />
        </h1>
        <img
          src={`/assets/icons/like.svg`}
          className={`${
            varient === "detailed"
              ? "w-[13.33px] h-[11.87px] sm:w-5 sm:h-[17.8px]"
              : "w-5 sm:h-[17.8px]"
          }`}
        />
      </div>

      {/* Car Image */}
      <div
        className={`${
          varient === "detailed"
            ? "flex sm:block justify-between mt-4"
            : "mt-10"
        }   sm:mt-12`}
      >
        <div
          className={`${
            varient === "detailed" ? "w-[142px] h-16" : "w-[180px] h-14"
          }  sm:w-[232px] sm:h-[120px] flex items-center justify-center`}
        >
          <img
            src="/assets/skeleton/gallery.svg"
            className="w-[60px] h-[60px] animate-pulse"
          />
        </div>

        <div
          className={`${
            varient === "detailed"
              ? "flex-col sm:flex-row items-start gap-3"
              : "mt-10  gap-1"
          } sm:mt-10 flex  sm:items-center justify-between sm:gap-4`}
        >
          {/* Fuel Capacity */}
          <div className="flex gap-1 items-center">
            <LineSkeleton variant="secondary" className="w-[68px]!" />
          </div>
          {/* Transmission */}
          <div className="flex gap-1 items-center">
            <LineSkeleton variant="secondary" className="w-[68px]!" />
          </div>
          {/* Seats */}
          <div className="flex gap-1 items-center">
            <LineSkeleton variant="secondary" className="w-[68px]!" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 sm:mt-6">
        {/* Price and Original Price */}
        <div className="space-y-2">
          <LineSkeleton
            variant="primary"
            className={`${
              varient === "compact" ? "w-[68px]! sm:w-[116px]!" : ""
            }`}
          />
          <LineSkeleton
            variant="secondary"
            className={`${
              varient === "compact" ? "w-[68px]! sm:w-[116px]!" : ""
            }`}
          />
        </div>
        <button className="h-9 w-[100px] sm:h-11 sm:w-[116px] bg-[#3563E9] rounded-md" />
      </div>
    </>
  );
};

export default CarCartSkeleton;
