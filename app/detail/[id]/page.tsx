"use client";
import { useFilter } from "@/context/FilterContext";
import CarDetailCart from "./CarDetailCart";
import CarGallery from "./CarGallery";
import ReviewsCart from "./ReviewsCart";
import { dashboardData, details } from "@/lib/mockData";
import { useState } from "react";
import CarCollection from "@/components/common/car-list/CarCollection";

const DetailPage = () => {
  const { isFilterOpen } = useFilter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <>
      <div className="p-4 lg:p-8 w-full space-y-6 overflow-y-auto">
        <div className="flex flex-col sm:flex-row gap-4  md:gap-6">
          {/* car gallery */}
          <div
            className={`w-full sm:w-[300px] md:w-[350px] ${
              isFilterOpen ? "" : "lg:w-full"
            } xl:w-full`}
          >
            <CarGallery
              isLoading={isLoading}
              data={details.car_detail.views || []}
            />
          </div>

          {/* car detail card */}
          <div className="w-full">
            <CarDetailCart isLoading={isLoading} data={details.car_detail} />
          </div>
        </div>

        {/* Reviews */}
        <div>
          <ReviewsCart data={details.reviews} isLoading={isLoading} />
        </div>

        {/* Recent Car */}
        <div>
          <CarCollection
            header={{
              title: "Recent Car",
              showViewAll: true,
            }}
            data={details.recent_car}
            isLoading={isLoading}
            layout="scroll"
          />
        </div>

        {/* Recomendation Car Car */}
        <div>
          <CarCollection
            header={{
              title: "Recomendation Car",
              showViewAll: true,
            }}
            data={details.recomendation_car}
            isLoading={isLoading}
            layout="scroll"
          />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
