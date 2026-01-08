import React, { useState } from "react";
import { getData } from "@/lib/mockData";
import CheckBox from "@/components/ui/checkbox/CheckBox";
import SliderBar from "@/components/ui/slider/SliderBar";
import FilterDrawerSkeleton from "@/components/shared/FilterDrawerSkeleton";
import DrawerWraper from "@/components/ui/drawer/DrawerWraper";
import { useFilter } from "@/context/FilterContext";

const FilterSidebar: React.FC<IFilterSidebarProps> = ({ isLoading }) => {
  const { toggleFilter } = useFilter();

  const handleApplyFilter = () => {
    toggleFilter();
  };
  return (
    <>
      {/* Sidebar */}
      <DrawerWraper
        open
        anchor="left"
        variant="persistent"
        className="lg:sticky sm:w-[305px]"
        sx={{
          "& .MuiDrawer-paper": {
            // < 640px (default)
            top: "217px",
            height: "calc(100vh - 217px)",
            "@media (min-width:1023px)": {
              position: "inherit",
            },
            // 640px – 767px
            "@media (min-width:640px) and (max-width:767px)": {
              top: "193px",
              height: "calc(100vh - 193px)",
            },

            // >= 768px
            "@media (min-width:768px)": {
              top: "129px",
              height: "calc(100vh - 129px)",
            },
          },
        }}
      >
        {isLoading ? (
          <FilterDrawerSkeleton />
        ) : (
          <div className="w-screen sm:w-[300px] bg-card  min-h-full ">
            {/* Close button */}
            <div className="flex p-4 justify-end lg:hidden">
              <button
                type="button"
                aria-label="Close filter"
                onClick={() => toggleFilter()}
                className="flex items-center justify-center w-9 h-9 text-xl font-bold rounded-full text-gray-800 transition duration-300 ease-in-out hover:rotate-180 focus:outline-none cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* category type */}
            <div className="space-y-10 p-4 lg:p-8">
              <div className="space-y-4">
                <p className="text-[12px] font-semibold text-muted pb-2">
                  T Y P E
                </p>
                {getData.categoryTypes.map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center select-none"
                  >
                    <CheckBox
                      className="w-5 h-5"
                      label={
                        <div className="pl-4 space-x-2">
                          <span className="text-[16px] font-semibold text-body">
                            {item.label}
                          </span>
                          <span className="text-[16px] font-semibold text-muted">
                            ({item.count})
                          </span>
                        </div>
                      }
                    />
                  </label>
                ))}
              </div>

              {/* capacity options */}
              <div className="space-y-4">
                <p className="text-[12px] font-semibold text-muted pb-2">
                  C A P A C I T Y
                </p>
                {getData.carCapacityOptions.map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center select-none"
                  >
                    <CheckBox
                      className="w-5 h-5"
                      label={
                        <div className="pl-4 space-x-2">
                          <span className="text-[16px] font-semibold text-body">
                            {item.label}
                          </span>
                          <span className="text-[16px] font-semibold text-muted">
                            ({item.count})
                          </span>
                        </div>
                      }
                    />
                  </label>
                ))}
              </div>

              {/* price */}
              <div>
                <p className="text-[12px] font-semibold text-muted pb-4">
                  P R I C E
                </p>
                <SliderBar min={0} max={100} valueLabelDisplay="auto" />
                <span className="text-lg font-semibold text-body">
                  Max. $100.00
                </span>
              </div>

              {/* Buttons */}
              <div className="flex justify-between gap-2 lg:hidden">
                <button
                  className="bg-gray-600 hover:bg-gray-700 h-11 w-full text-white text-[12px] sm:text-[16px] font-semibold rounded-xl cursor-pointer"
                  onClick={() => toggleFilter()}
                >
                  Cancel
                </button>
                <button
                  className="btn-primary h-11 w-full text-white text-[12px] sm:text-[16px] font-semibold rounded-xl cursor-pointer"
                  onClick={handleApplyFilter}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </DrawerWraper>
    </>
  );
};

export default FilterSidebar;
