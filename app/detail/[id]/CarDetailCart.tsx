import RatingStar from "@/components/ui/rating/RatingStar";
import React, { useState } from "react";

const CarDetailCart = () => {
  const originalPrice = true;

  const [isLike, setIsLike] = useState(true);

  const handleLikeFunction = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <div className="bg-card rounded-xl px-4 py-6 flex flex-col justify-between h-full w-full">
        {/* carname, like-button, rating */}
        <div className="space-y-6 sm:space-y-12">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <h1 className="text-[16px] sm:text-xl font-bold text-heading">
                Nissan GT - R
              </h1>
              <img
                src={`/assets/icons/${isLike ? "like" : "unlike"}.svg`}
                className={`cursor-pointer flex justify-center items-center w-6 h-6`}
                onClick={handleLikeFunction}
              />
            </div>
            <div className="flex items-center gap-2">
              <RatingStar size="small" />
              <span className="text-sm text-secondary">440+ Reviewer</span>
            </div>
          </div>
          {/* description */}
          <div className="mb-6 ">
            <span className="text-sm md:text-[18px] text-secondary ">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </span>
          </div>
        </div>
        {/* car detail */}
        <div className="space-y-6 sm:space-y-12">
          <div className="flex flex-wrap justify-between gap-2 md:gap-8">
            <div className="flex-1 space-y-2">
              <p className="flex justify-between">
                <label className="text-sm  md:text-[18px] text-muted">
                  Type Car
                </label>
                <span className="text-sm md:text-[18px] font-semibold text-secondary">
                  Sport
                </span>
              </p>
              <p className="flex justify-between">
                <label className="text-sm md:text-[18px] text-muted">
                  Steering
                </label>
                <span className="text-sm md:text-[18px] font-semibold text-secondary">
                  Manual
                </span>
              </p>
            </div>
            <div className="flex-1 space-y-2">
              <p className="flex justify-between">
                <label className="text-sm md:text-[18px] text-muted">
                  Capacity
                </label>
                <span className="text-sm md:text-[18px] font-semibold text-secondary">
                  2 Person
                </span>
              </p>
              <p className="flex justify-between">
                <label className="text-sm md:text-[18px] text-muted">
                  Gasoline
                </label>
                <span className="text-sm md:text-[18px] font-semibold text-secondary">
                  70L
                </span>
              </p>
            </div>
          </div>
          {/* price and rent-now button */}
          <div className="flex items-center justify-between mt-4 sm:mt-6">
            {/* Price and Original Price */}
            <div>
              <p className="text-heading text-[16px] sm:text-xl font-bold">
                $80.00/
                <span className="text-muted text-[12px] sm:text-sm font-bold">
                  day
                </span>
              </p>
              {originalPrice && (
                <p>
                  <span className="text-muted text-sm line-through font-bold">
                    $100.00
                  </span>
                </p>
              )}
            </div>
            <button className="btn-primary h-9 w-[100px] sm:h-11 sm:w-[116px]  text-[12px] sm:text-[16px] font-medium rounded-md cursor-pointer">
              Rental Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailCart;
