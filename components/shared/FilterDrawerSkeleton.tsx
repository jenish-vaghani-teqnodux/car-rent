import { getData } from "@/lib/mockData";
import React from "react";
import LineSkeleton from "./LineSkeleton";
import SliderBar from "../ui/slider/SliderBar";
import SliderSkeleton from "./SliderSkeleton";

const FilterDrawerSkeleton = () => {
  return (
    <div className="w-screen sm:w-[300px] bg-card min-h-full">
      {/* category type */}
      <div className="space-y-10 p-4 lg:p-8">
        <div className="space-y-4 flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-muted pb-2">T Y P E</p>
          {getData.categoryTypes.map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-1.5  select-none"
            >
              <span className="w-[15px] h-[15px] rounded-full bg-[#85A8F8]" />

              <LineSkeleton variant="primary" />
            </label>
          ))}
        </div>

        {/* capacity options */}
        <div className="space-y-4 flex flex-col gap-1.5">
          <p className="text-[12px] font-semibold text-muted pb-2">
            C A P A C I T Y
          </p>
          {getData.carCapacityOptions.map((item) => (
            <label
              key={item.value}
              className="flex items-center gap-1.5  select-none"
            >
              <span className="w-[15px] h-[15px] rounded-full bg-[#85A8F8]" />

              <LineSkeleton variant="primary" />
            </label>
          ))}
        </div>

        {/* price */}
        <div>
          <p className="text-[12px] font-semibold text-muted mb-8">P R I C E</p>
          <SliderSkeleton />
          <span className="text-lg font-semibold text-body mt-8">
            Max. $100.00
          </span>
        </div>

        <div className="flex justify-between gap-2 lg:hidden">
          <button className="bg-[#3563E9] h-11 w-[156px] rounded-xl" />

          <button className="bg-[#3563E9] h-11 w-[156px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default FilterDrawerSkeleton;
