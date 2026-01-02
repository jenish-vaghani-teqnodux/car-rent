"use client";
import SearchWrapper from "../ui/search/SearchWrapper";
import { useState } from "react";
import LineSkeleton from "../shared/LineSkeleton";
import SearchSkeleton from "../shared/SearchSkeleton";
import MobileSearch from "../ui/search/MobileSearch";

const Header = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMoreIcons, setShowMoreIcons] = useState<boolean>(false);

  return (
    <div className="bg-card pt-8 sm:pt-10 pb-10 border-b border-devider sticky top-0 z-50">
      <div className="pl-[25px] lg:pl-15 lg:pr-18  mr-6">
        <div className="flex items-center h-full space-x-4">
          {/* List Button(if mobile) */}
          {isLoading ? (
            <div className="flex w-7 h-7 sm:w-11 sm:h-11 rounded-full border border-devider items-center justify-center">
              <div className="animate-pulse opacity-100">
                <img
                  src="/assets/skeleton/list.svg"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>
            </div>
          ) : (
            <div
              className="block sm:hidden cursor-pointer"
              onClick={() => setShowMoreIcons((prev) => !prev)}
            >
              <img src="/assets/icons/list.svg" />
            </div>
          )}

          {/* Company Name */}
          <h1 className="hidden sm:block text-[32px] font-bold text-primary">
            {isLoading ? <LineSkeleton variant="primary" /> : "MORENT"}
          </h1>

          {/* Search and filter */}
          <div className="hidden md:block w-[492px] min-w-[300px]">
            {isLoading ? (
              <SearchSkeleton />
            ) : (
              <SearchWrapper placeholder="Search something here" />
            )}
          </div>

          {/* Icons */}
          <div className="flex gap-2 lg:gap-5 ml-auto">
            {isLoading ? (
              <>
                <div className="hidden sm:flex w-7 h-7 sm:w-11 sm:h-11 rounded-full border border-devider items-center justify-center">
                  <div className="animate-pulse opacity-100">
                    <img
                      src="/assets/skeleton/heart.svg"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                </div>

                <div className="hidden sm:flex w-7 h-7 sm:w-11 sm:h-11 rounded-full border border-devider items-center justify-center">
                  <div className="animate-pulse opacity-100">
                    <img
                      src="/assets/skeleton/notification.svg"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                </div>

                <div className="hidden sm:flex w-7 h-7 sm:w-11 sm:h-11 rounded-full border border-devider items-center justify-center">
                  <div className="animate-pulse opacity-100">
                    <img
                      src="/assets/skeleton/setting.svg"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                </div>

                <div className="flex w-7 h-7 sm:w-11 sm:h-11 rounded-full border border-devider items-center justify-center">
                  <div className="animate-pulse opacity-100">
                    <img
                      src="/assets/skeleton/profile.svg"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`${
                    !showMoreIcons && "hidden sm:flex"
                  }  flex w-7 h-7 sm:w-11 sm:h-11 rounded-full border border-devider hover:border-[#A9B9D2]! justify-center items-center cursor-pointer`}
                >
                  <img
                    src="/assets/icons/heart.svg"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <div
                  className={`${
                    !showMoreIcons && "hidden sm:flex"
                  }  flex w-7 h-7 sm:w-11 sm:h-11 relative rounded-full border border-devider hover:border-[#A9B9D2]! justify-center items-center cursor-pointer`}
                >
                  <span className="absolute w-2 sm:w-[11px] h-2 sm:h-[11px] top-0 right-0 bg-[#FF4423] rounded-full"></span>
                  <img
                    src="/assets/icons/notification.svg"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <div
                  className={`${
                    !showMoreIcons && "hidden sm:flex"
                  }  flex w-7 h-7 sm:w-11 sm:h-11 rounded-full border border-devider hover:border-[#A9B9D2]! justify-center items-center cursor-pointer`}
                >
                  <img
                    src="/assets/icons/setting.svg"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-devider hover:border-[#A9B9D2]! flex justify-center items-center cursor-pointer">
                  <img
                    src="/images/profile.png"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Company Name(if mobile) */}
        <h1 className="block sm:hidden mt-4 text-[24px] font-bold text-primary">
          {isLoading ? <LineSkeleton variant="primary" /> : "MORENT"}
        </h1>

        {/* MobileSearch */}
        <div className="block md:hidden mt-4">
          <MobileSearch
            placeholder="Search something here"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
