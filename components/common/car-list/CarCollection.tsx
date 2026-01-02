import React from "react";
import CarCart from "./CarCart";
import { useFilter } from "@/context/FilterContext";

const CarCollection: React.FC<ICarCollectionProps> = ({
  header,
  data,
  isLoading,
  varient,
  layout = "grid",
}) => {
  const { isFilterOpen } = useFilter();

  const title = header?.title;
  const showViewAll = header?.showViewAll;
  return (
    <div>
      <div className="flex justify-between items-center px-5">
        {title ? (
          <p
            className={`text-[14px] sm:text-lg font-semibold ${
              isLoading ? "text-[#85A8F8]" : "text-muted"
            } `}
          >
            {title || ""}
          </p>
        ) : (
          <span />
        )}

        {showViewAll && (
          <p className="text-[12px] sm:text-lg font-semibold text-primary cursor-pointer">
            View All
          </p>
        )}
      </div>

      {layout === "grid" && (
        <div
          className={`grid gap-6 justify-items-center ${
            title && showViewAll ? "pt-4" : ""
          }  ${
            !isFilterOpen
              ? " grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
          }  `}
        >
          {data &&
            data.map((car, index) => (
              <CarCart
                key={`${car.id}-${index}`}
                carId={car.id}
                carName={car.title}
                category={car.category}
                isLiked={car.user_liked}
                imageUrl={car.image_url}
                flip={car.flip}
                fuelCapacity={car.fuelCapacity}
                transmission={car.transmission}
                seats={car.seats}
                price={car.price}
                originalPrice={car.originalPrice}
                isLoading={isLoading}
                varient={varient}
              />
            ))}
        </div>
      )}

      {layout === "scroll" && (
        <div className="pt-4 flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide">
          {data &&
            data.map((car) => (
              <div key={car.id} className="shrink-0">
                <CarCart
                  carId={car.id}
                  carName={car.title}
                  category={car.category}
                  isLiked={car.user_liked}
                  imageUrl={car.image_url}
                  flip={car.flip}
                  fuelCapacity={car.fuelCapacity}
                  transmission={car.transmission}
                  seats={car.seats}
                  price={car.price}
                  originalPrice={car.originalPrice}
                  isLoading={isLoading}
                  varient={varient}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CarCollection;
