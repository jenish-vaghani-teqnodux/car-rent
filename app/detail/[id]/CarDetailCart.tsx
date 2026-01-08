import CarDetailCartSkeleton from "@/components/shared/CarDetailCartSkeleton";
import RatingStar from "@/components/ui/rating/RatingStar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CarDetailCart: React.FC<ICarDetailCartProps> = ({ isLoading, data }) => {
  const router = useRouter();

  const [isLike, setIsLike] = useState(data.user_liked);
  const [newRating, setNewRating] = useState<number | null>(data.rating);

  const handleLikeFunction = () => {
    setIsLike(!isLike);
  };

  const handleClickRental = () => {
    router.push(`/payment/${data.id}`);
  };
  return (
    <div className="bg-card rounded-xl px-4 py-6 flex flex-col justify-between h-full w-full">
      {isLoading ? (
        <CarDetailCartSkeleton />
      ) : (
        <>
          {/* carname, like-button, rating */}
          <div className="space-y-6 sm:space-y-12">
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h1 className="text-[16px] sm:text-xl font-bold text-heading">
                  {data.title}
                </h1>
                <img
                  src={`/assets/icons/${isLike ? "like" : "unlike"}.svg`}
                  className={`cursor-pointer flex justify-center items-center w-6 h-6`}
                  onClick={handleLikeFunction}
                />
              </div>
              <div className="flex items-center gap-2">
                <RatingStar
                  size="small"
                  value={newRating}
                  onChange={(event, newValue) => setNewRating(newValue)}
                />
                <span className="text-sm text-secondary">
                  {data.totalReviewer} Reviewer
                </span>
              </div>
            </div>
            {/* description */}
            <div className="mb-6 ">
              <span className="text-sm md:text-[18px] text-secondary ">
                {data.description}
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
                    {data.category}
                  </span>
                </p>
                <p className="flex justify-between">
                  <label className="text-sm md:text-[18px] text-muted">
                    Steering
                  </label>
                  <span className="text-sm md:text-[18px] font-semibold text-secondary">
                    {data.transmission}
                  </span>
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <p className="flex justify-between">
                  <label className="text-sm md:text-[18px] text-muted">
                    Capacity
                  </label>
                  <span className="text-sm md:text-[18px] font-semibold text-secondary">
                    {data.seats} Person
                  </span>
                </p>
                <p className="flex justify-between">
                  <label className="text-sm md:text-[18px] text-muted">
                    Gasoline
                  </label>
                  <span className="text-sm md:text-[18px] font-semibold text-secondary">
                    {data.fuelCapacity}
                  </span>
                </p>
              </div>
            </div>
            {/* price and rent-now button */}
            <div className="flex items-center justify-between mt-4 sm:mt-6">
              {/* Price and Original Price */}
              <div>
                <p className="text-heading text-[16px] sm:text-xl font-bold">
                  {data.price}.00/
                  <span className="text-muted text-[12px] sm:text-sm font-bold">
                    day
                  </span>
                </p>
                {data.originalPrice && (
                  <p>
                    <span className="text-muted text-sm line-through font-bold">
                      ${data.originalPrice}.00
                    </span>
                  </p>
                )}
              </div>
              <button
                className="btn-primary h-9 w-[100px] sm:h-11 sm:w-[116px]  text-[12px] sm:text-[16px] font-medium rounded-md cursor-pointer"
                onClick={handleClickRental}
              >
                Rental Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CarDetailCart;
