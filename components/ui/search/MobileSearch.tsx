"user client";
import SearchSkeleton from "@/components/shared/SearchSkeleton";
import { useFilter } from "@/context/FilterContext";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MobileSearch: React.FC<SearchWrapperProps> = ({
  placeholder,
  isLoading,
}) => {
  const { toggleFilter } = useFilter();
  const pathname = usePathname();
  const showFilter = pathname === "/";
  return (
    <div className="flex space-x-4 w-full">
      {isLoading ? (
        <>
          <div className="flex-1 flex-wrap">
            <SearchSkeleton />
          </div>
          {showFilter && (
            <span className="flex justify-center items-center border border-devider rounded-full h-11 w-11 animate-pulse opacity-100">
              <img
                src="/assets/skeleton/filter.svg"
                className="w-6 h-6 text-blue-800"
              />
            </span>
          )}
        </>
      ) : (
        <>
          {/* Search Box with Icon */}
          <div className="flex items-center h-12 w-full border border-devider rounded-[10px] px-4 space-x-3">
            <img src="/assets/icons/search.svg" className="w-6 h-6" />

            <input
              type="text"
              placeholder={placeholder || "Search"}
              className="w-full outline-none text-gray-600 placeholder:text-gray-400"
            />
          </div>

          {/* Filter Button */}
          {showFilter && (
            <button
              className="flex justify-center items-center border border-devider rounded-[10px] h-12 w-14 cursor-pointer"
              onClick={() => toggleFilter()}
            >
              <img src="/assets/icons/filter.svg" className="w-6 h-6" />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default MobileSearch;
