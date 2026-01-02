"use client";
import CarCartSkeleton from "@/components/shared/CarCartSkeleton";
import Link from "next/link";
import React, { useState } from "react";

const CarCart: React.FC<ICarCartProps> = ({
  carId,
  carName,
  category,
  isLiked,
  imageUrl,
  flip,
  fuelCapacity,
  transmission,
  seats,
  price,
  originalPrice,
  isLoading,
  varient = "compact",
}) => {
  const [isLike, setIsLike] = useState(isLiked);

  const handleLikeFunction = () => {
    setIsLike(!isLike);
  };

  return (
    <div
      className={`bg-card rounded-xl p-4 mb-1 sm:p-6 ${
        varient === "detailed" ? "w-[327px] h-60 " : "w-60  h-[286px]"
      } sm:w-[304px] sm:h-[388px]`}
    >
      {isLoading ? (
        <CarCartSkeleton varient={varient} />
      ) : (
        <>
          <div className="flex justify-between items-start">
            {/* Car Name and Category */}
            <h1>
              <div className="text-[16px] sm:text-xl font-bold text-heading">
                {carName}
              </div>
              <p className="text-muted text-[12px] sm:text-sm font-bold">
                {category}
              </p>
            </h1>
            <img
              src={`/assets/icons/${isLike ? "like" : "unlike"}.svg`}
              className={`cursor-pointer flex justify-center items-center ${
                varient === "detailed" ? "w-5 h-5 sm:w-6 sm:h-6" : "w-6 h-6"
              }`}
              onClick={handleLikeFunction}
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
              <Link href={`/detail/${carId}`}>
                <img
                  src={imageUrl}
                  className={`object-contain cursor-pointer ${
                    flip ? "scale-x-[-1]" : "scale-x-100"
                  }`}
                />
              </Link>
            </div>

            <div
              className={`${
                varient === "detailed"
                  ? "flex-col sm:flex-row items-start gap-3"
                  : "mt-10  gap-1"
              } sm:mt-10 flex  sm:items-center justify-between sm:gap-4`}
            >
              {/* Fuel Capacity */}
              <p className="flex gap-1 items-center">
                <img src="/assets/icons/gas-station.svg" className="w-6 h-6" />
                <span className="text-muted text-[12px] sm:text-sm font-medium">
                  {fuelCapacity}
                </span>
              </p>
              {/* Transmission */}
              <p className="flex gap-1 items-center">
                <img src="/assets/icons/car.svg" className="w-6 h-6" />
                <span className="text-muted text-[12px] sm:text-sm font-medium">
                  {transmission}
                </span>
              </p>
              {/* Seats */}
              <p className="flex gap-1 items-center">
                <img src="/assets/icons/user.svg" className="w-6 h-6" />
                <span className="text-muted text-[12px] sm:text-sm font-medium">
                  {seats || 4} People
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 sm:mt-6">
            {/* Price and Original Price */}
            <div>
              <p className="text-heading text-[16px] sm:text-xl font-bold">
                ${price}.00/
                <span className="text-muted text-[12px] sm:text-sm font-bold">
                  day
                </span>
              </p>
              {originalPrice && (
                <p>
                  <span className="text-muted text-sm line-through font-bold">
                    ${originalPrice}.00
                  </span>
                </p>
              )}
            </div>
            <button className="btn-primary h-9 w-[100px] sm:h-11 sm:w-[116px]  text-[12px] sm:text-[16px] font-medium rounded-md cursor-pointer">
              Rental Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CarCart;
