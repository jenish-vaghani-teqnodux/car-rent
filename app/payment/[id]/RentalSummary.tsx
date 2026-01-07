import React, { useState } from "react";
import PaymentCart from "./PaymentCart";
import { useParams } from "next/navigation";
import RatingStar from "@/components/ui/rating/RatingStar";
import RentalSummarySkeleton from "@/components/shared/RentalSummarySkeleton";

const RentalSummary: React.FC<IPaymentInfoProps> = ({
  paymentInfo,
  setPaymentInfo,
  data,
  isLoading,
}) => {
  const params = useParams();

  const [promoInput, setpromoInput] = useState("");

  const handleApplyNow = () => {
    setPaymentInfo((prev) => ({
      ...prev,
      promoCode: promoInput,
    }));
    setpromoInput("");
  };

  return (
    <div className="bg-card p-6 w-full rounded-xl space-y-8 sm:space-y-10">
      {isLoading ? (
        <RentalSummarySkeleton />
      ) : (
        <>
          {/* title and description */}
          <div>
            <h1 className="text-heading text-[16px] sm:text-[20px] font-bold">
              Rental Summary
            </h1>
            <span className="text-muted text-sm font-medium">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </span>
          </div>

          {/* image, carName, rating and review */}
          <div className="flex items-center gap-2 flex-wrap">
            <img
              src={`/images/${params.id}-view-1.png`}
              alt="car-image"
              className=" w-[116px] h-20 sm:w-[132px] sm:h-[108px] rounded-lg"
            />
            <div className="space-y-1">
              <h1 className="text-heading text-[20px] sm:text-[32px] font-bold">
                {data?.carName}
              </h1>
              <div className="flex flex-col items-start md:flex-row md:items-center gap-2">
                <RatingStar
                  size="small"
                  value={paymentInfo.rating}
                  onChange={(event, newValue) =>
                    setPaymentInfo({ ...paymentInfo, rating: newValue })
                  }
                />
                <span className="text-sm text-secondary">
                  {data?.totalReviewer} Reviewer
                </span>
              </div>
            </div>
          </div>

          {/* border */}
          <span className="flex border-devider border " />

          {/* subtotal and tax */}
          <div className="space-y-2 sm:space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-muted text-[16px] font-medium">Subtotal</p>
              <span className="text-heading text-[16px] font-semibold">
                ${data?.subTotal}.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-muted text-[16px] font-medium">Tax</p>
              <span className="text-heading text-[16px] font-semibold">
                ${data?.tax}
              </span>
            </div>
          </div>

          {/* promo code */}
          <div>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Apply promo code"
                className="h-14 w-full pl-6 pr-32 bg-page rounded-xl outline-none focus:ring-0 text-[#1F2544]"
                onChange={(e) => setpromoInput(e.target.value)}
                value={promoInput}
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 
               text-[#1F2544] font-semibold text-sm sm:text-base cursor-pointer"
                onClick={handleApplyNow}
              >
                Apply now
              </button>
            </div>
          </div>

          {/* total price */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-heading text-[16px] sm:text-[20px] font-bold">
                Total Rental Price
              </h1>
              <span className="text-muted text-sm font-medium">
                Overall price and includes rental discount
              </span>
            </div>
            <h1 className="text-heading text-[20px] sm:text-[32px] font-bold">
              $80.00
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default RentalSummary;
