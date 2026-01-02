"use client";

import { useState } from "react";
import RideLocationCard from "@/components/common/location-card/RideLocationCard";
import CarCollection from "@/components/common/car-list/CarCollection";
import { dashboardData } from "@/lib/mockData";
import SlotBanner1 from "./SlotBanner1";
import SlotBanner2 from "./SlotBanner2";
import { useFilter } from "@/context/FilterContext";

export default function Home() {
  const { isFilterOpen } = useFilter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pickupData, setPickupData] = useState<{
    location: string;
    date: string;
    time: string;
  }>(dashboardData.pickup);

  const [dropoffData, setDropoffData] = useState<{
    location: string;
    date: string;
    time: string;
  }>(dashboardData.dropoff);

  const filterCars = [
    ...(dashboardData.popular_car || []),
    ...(dashboardData.recomendation_car || []),
  ];

  return (
    <div className={` w-full`}>
      <div
        className={`  ${
          isFilterOpen ? "p-7" : "px-4 2xl:px-16 py-8"
        } overflow-y-auto`}
      >
        {" "}
        {/* Slot banner */}
        {!isFilterOpen && (
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {dashboardData.slots.map((slot) =>
              slot.id === "44bb5a87-8e1b-4acd-8f1c-55d6a0b94626" ? (
                <SlotBanner1
                  slotId={slot.id}
                  key={slot.id}
                  title={slot.title}
                  description={slot.content}
                  className=""
                  isLoading={isLoading}
                  image_url={slot.image_url}
                  showButton={true}
                />
              ) : (
                <SlotBanner2
                  slotId={slot.id}
                  key={slot.id}
                  title={slot.title}
                  description={slot.content}
                  className=""
                  isLoading={isLoading}
                  image_url={slot.image_url}
                  flip={slot.flip}
                  showButton={true}
                />
              )
            )}
          </div>
        )}
        {/* Ride Location */}
        <div className={`${isFilterOpen ? "" : "mt-8"} `}>
          <div
            className={`flex flex-col xl:flex-row justify-center ${
              !isFilterOpen
                ? "xl:justify-between"
                : "xl:space-x-4 2xl:space-x-8"
            } relative xl:static items-center gap-8 xl:gap-0`}
          >
            <RideLocationCard
              title="Pick-Up"
              isLoading={isLoading}
              data={dashboardData.pickup}
              onChange={(updatedData) => {
                setPickupData(updatedData);
              }}
            />

            <div
              className={`mx-3 2xl:mx-8 flex items-center justify-center absolute ${
                !isFilterOpen ? "xl:static" : ""
              } `}
            >
              {isLoading ? (
                <div className="w-[60px] h-[60px] bg-[#3563E9] rounded-xl" />
              ) : (
                <div className="btn-primary w-[60px] h-[60px] rounded-xl flex justify-center items-center cursor-pointer">
                  <img src="/assets/icons/swap.svg" />
                </div>
              )}
            </div>

            <RideLocationCard
              title="Drop-off"
              isLoading={isLoading}
              data={dashboardData.dropoff}
              onChange={(updatedData) => {
                setDropoffData(updatedData);
              }}
            />
          </div>
        </div>
        {/* Popular Car */}
        {!isFilterOpen && (
          <div className="mt-8">
            <CarCollection
              header={{
                title: "Popular car",
                showViewAll: true,
              }}
              data={dashboardData.popular_car}
              isLoading={isLoading}
              layout="scroll"
            />
          </div>
        )}
        {/* Recomendation Car */}
        {!isFilterOpen && (
          <div className="mt-8">
            <CarCollection
              header={{
                title: "Recomendation Car",
                showViewAll: true,
              }}
              data={dashboardData.recomendation_car}
              isLoading={isLoading}
              varient="detailed"
              layout="grid"
            />
          </div>
        )}
        {/* Filtered All Cars(if filter) */}
        {isFilterOpen && (
          <div className="mt-8">
            <CarCollection
              header={{
                title: "",
                showViewAll: false,
              }}
              data={filterCars}
              isLoading={isLoading}
              varient="detailed"
              layout="grid"
            />
          </div>
        )}
        {/* Button */}
        <div className="flex justify-between items-center mt-12">
          <span />
          {isLoading ? (
            <button className="h-11 w-[116px] bg-[#3563E9] rounded-md" />
          ) : (
            <button className="btn-primary h-11 w-[156px] text-white text-[12px] sm:text-[16px] font-medium rounded-md cursor-pointer">
              Show more car
            </button>
          )}

          <span className="text-muted text-sm font-semibold">120 car</span>
        </div>
      </div>
    </div>
  );
}
