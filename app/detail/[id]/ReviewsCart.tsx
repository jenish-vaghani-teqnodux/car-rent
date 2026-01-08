import { useState } from "react";
import Reviews from "./Reviews";
import ReviewsCartSkeleton from "@/components/shared/ReviewsCartSkeleton";

const ReviewsCart: React.FC<IReviewsCartProps> = ({ data, isLoading }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const visibleData = showAll ? data : data.slice(0, 2);

  return (
    <div className="bg-card rounded-xl px-4 py-6 space-y-6">
      {isLoading ? (
        <ReviewsCartSkeleton />
      ) : (
        <>
          {/* Reviews heading */}
          <div className="flex gap-4 items-center">
            <h1 className="text-heading text-[20px] font-bold">Reviews</h1>
            <span className="w-11 h-7 bg-[#3563E9] rounded-md text-white flex justify-center items-center text-[14px] font-bold">
              {data.length ?? 0}
            </span>
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            {visibleData.map((item) => (
              <Reviews
                key={item.id}
                name={item.name}
                profileImage={item.profileImage}
                rating={item.rating}
                reviewDate={item.reviewDate}
                reviewText={item.reviewText}
                role={item.role}
              />
            ))}
          </div>

          {/* show all button */}
          <div className="flex justify-center mt-10">
            <button
              className="flex items-center gap-2 cursor-pointer hover:border-b hover:border-[#90A3BF]"
              onClick={() => setShowAll((prev) => !prev)}
            >
              <span className="text-[14px] sm:text-[16px] text-muted ">
                {showAll ? "Show Less" : "Show All"}
              </span>
              <img
                src="/assets/icons/arrow-down.svg"
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ReviewsCart;
