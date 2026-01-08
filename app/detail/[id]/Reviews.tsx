import RatingStar from "@/components/ui/rating/RatingStar";
import { useState } from "react";

const Reviews = ({
  name,
  role,
  profileImage,
  reviewDate,
  rating,
  reviewText,
}: Reviews) => {
  const [newRating, setNewRating] = useState<number | null>(rating);
  return (
    <>
      <div className="flex gap-4">
        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden flex justify-center items-center ">
          <img src={profileImage} className="w-full h-full object-cover" />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-heading text-[16px] sm:text-[20px] font-bold">
              {name}
            </h1>
            <span className="text-muted font-medium text-[12px] sm:text-[14px]">
              {reviewDate}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted font-medium text-[12px] sm:text-[14px]">
              {role}
            </span>
            <RatingStar
              value={newRating}
              onChange={(event, newValue) => setNewRating(newValue)}
            />
          </div>
          <div className="mt-2 pr-4">
            <span className="text-[12px] sm:text-[14px] text-secondary line-clamp-3">
              {reviewText}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
