import React, { useState } from "react";
import PaymentCart from "./PaymentCart";
import { useParams } from "next/navigation";
import RatingStar from "@/components/ui/rating/RatingStar";

const RentalSummary = () => {
  const [newRating, setNewRating] = useState<number | null>(4);
  const params = useParams();

  return (
    <div className="bg-card p-4 w-full rounded-xl space-y-6">
      {/* title and description */}
      <div>
        <h1 className="text-heading text-[16px] sm:text-[20px] font-bold">
          Rental Summary
        </h1>
        <span className="text-muted text-sm font-medium">
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </span>
      </div>

      <div className="flex items-center gap-2">
        <img
          src={`/images/${params.id}-view-1.png`}
          alt="car-image"
          className="w-[132px] h-[108px] rounded-lg"
        />
        <div className="space-y-1">
          <h1 className="text-heading text-[20px] sm:text-[32px] font-bold">
            Nissan GT - R
          </h1>
          <div className="flex items-center gap-2">
            <RatingStar
              size="small"
              value={newRating}
              onChange={(event, newValue) => setNewRating(newValue)}
            />
            <span className="text-sm text-secondary">440+ Reviewer</span>
          </div>
        </div>
      </div>
      <span className="flex border-devider border " />
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-muted text-[16px] font-medium">Subtotal</p>
          <span className="text-heading text-[16px] font-semibold">$80.00</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-muted text-[16px] font-medium">Tax</p>
          <span className="text-heading text-[16px] font-semibold">$0</span>
        </div>
      </div>
    </div>
  );
};

export default RentalSummary;
